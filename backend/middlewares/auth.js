
const jwt=require('jsonwebtoken');
const JWT_SECRET = "mynameismubashir";

function auth(req,res,next){
    const token=req.headers.authorization;
    console.log(req);
    if (!token) {
        return res.status(401).json({
            message: "Authorization token missing"
        });
    }

    const decodedUser=jwt.verify(token,JWT_SECRET);
    console.log("decoded user id",decodedUser.id);
    if(decodedUser){
        req.userId=decodedUser.id;
        next();
    }
    else{
        res.status(403).json({
         message:"invalid credentials"
        })
    }
};

module.exports={auth};