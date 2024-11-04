const mongoose=require('mongoose');

const Schema= mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema= new Schema({
    email: String,
    password: String,
    role:String,
});


const courseSchema= new Schema({
    title:String,
    description: String,
    price: Number,
    published:Boolean,
    imageName:String,
    imageUrl:String,
    userId:{type:ObjectId,ref:"users"}
});

const UserModel= mongoose.model("users",userSchema);
const CourseModel=mongoose.model("courses",courseSchema);

module.exports={
    UserModel,
    CourseModel
};

