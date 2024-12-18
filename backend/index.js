const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { auth } = require("./middlewares/auth");
const { UserModel, CourseModel } = require("./models/models");
const {upload}=require("./middlewares/multer");
const sharp = require("sharp");
const {s3,getCommand,bucketName}=require("./utils/index")
const { getSignedUrl } =require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand } =require("@aws-sdk/client-s3");
const { z } = require("zod");
const crypto=require("crypto")
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const jwt_secret = process.env.JWT_SECRET;
const randomImageName=(bytes=32)=>crypto.randomBytes(bytes).toString('hex');
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello, world!");
});

app.post("/admin/signup", async (req, res) => {
  const requestBody = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });
  const parsedDataWithValidation = requestBody.safeParse(req.body);
  if (!parsedDataWithValidation.success) {
    return res
      .status(400)
      .json({ message: "Invalid data", error: parsedDataWithValidation.error });
  }
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "Email already taken, please choose a different email",
    });
  }
  try {
    const user = await UserModel.create({
      email,
      password:hashedPassword,
      role: "admin",
    });
    console.log("hashedPassword", hashedPassword);
    res.json({
      message: "Admin created successfully",
      user: { id: user._id, username: user.username, role: user.role },
    });
  } catch (error) {
    console.error("Error creating admin:", error);
    res.json({
      message: "Error creating admin",
    });
  }
});

//admin signin
app.post("/admin/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await UserModel.findOne({ email: email, role: "admin" });
    console.log("admin password",admin.password);
    const isMatch=await bcrypt.compare(password,admin.password);
    if (admin && isMatch) {
      const token = jwt.sign({ id: admin._id }, jwt_secret);
      return res.json({
        message: "Admin logged in successfully",
        token,
      });
    }
    return res.json({ message: "Invalid email or password" });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" });
  }
});

//create a new course
app.post("/admin/create-course", auth,upload.single("CourseImg"),async (req, res) => { 
  // const resizedImageBuffer = await sharp(req.file.buffer).resize({height:324 ,width:192 ,fit: "contain"}).toBuffer()
  // .resize(324, 192);
  const imageName=randomImageName();
  const command = getCommand({
    originalName:imageName ,
    Body: resizedImageBuffer,
    ContentType: req.file.mimetype
  });
  await s3.send(command)
  const { title, description, price, published, userId } = req.body;
  try {
    const newCourse = await CourseModel.create({
      title,
      description,
      price,
      imageName,
      published,
      userId,
    });
    res.json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch {
    console.log("error", error);
    res.json({
      message: "Error while creating course",
    });
  }
});

// PUT /admin/courses/:courseId - Edit an existing course
app.put("/admin/courses/:courseId", auth, async (req, res) => {
  const courseId = req.params.courseId;
  const { title, description, price, imageLink, published } = req.body;

  try {
    const course = await CourseModel.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    course.title = title || course.title;
    course.description = description || course.description;
    course.price = price || course.price;
    course.imageLink = imageLink || course.imageLink;
    course.published = published !== undefined ? published : course.published;

    await course.save();

    res.json({
      message: "Course updated successfully",
      course,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update course", error: err.message });
  }
});

// GET /admin/courses - Return all courses
app.get("/admin/courses", auth, async (req, res) => {
  try {
    const courses = await CourseModel.find({});
    
    for (const course of courses) {
      const getObjectParams = { 
        Bucket: bucketName,
        Key: course.imageName
      };
      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
      course.imageUrl = url;
    }

    res.json({ courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Error fetching courses", error: error.message });
  }
});


//user routes logic
//create new user account
app.post("/user/signup", async (req, res) => {
  const requestBody = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(100),
  });

  const parsedDataWithValidation = requestBody.safeParse(req.body);

  if (!parsedDataWithValidation.success) {
    return res
      .status(400)
      .json({ message: "Invalid data", error: parsedDataWithValidation.error });
  }

  const { email, password } = req.body;
  // console.log("body", req.body);

  try {
    const user = await UserModel.create({
      email,
      password,
      role: "user",
    });

    res.json({
      message: "User created successfully",
      user: { id: user._id, username: user.username, role: user.role },
    });
  } catch (error) {
    console.error("Error creating User:", error);
    res.json({
      message: "Error creating User",
    });
  }
});

//user login
app.post("/user/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username, role: "user" });
    if (user && user.password === password) {
      const token = jwt.sign({ id: user._id }, jwt_secret);
      return res.json({
        message: "user logged in successfully",
        token,
      });
    }
    return res.json({ message: "Invalid username or password" });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" });
  }
  a;
});

// GET /user/courses - Return all courses
app.get("/user/courses", auth, async (req, res) => {
  try {
    const courses = await CourseModel.find({});
    res.json({ courses });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching courses", error: error.message });
  }
});

// POST /user/courses/:courseId - Enroll in a course
app.post("/user/courses/:courseId", auth, (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const course = courses.find((c) => c.id === courseId);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json({
    message: "Enrolled in course successfully",
  });
});

//GET/user/coruses - Return purchased courses
app.get("/user/courses", auth, async (req, res) => {});

app.listen(3000, function () {
  console.log("Server is up and running on port 3000");
});
