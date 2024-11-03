const { S3Client,PutObjectCommand } = require("@aws-sdk/client-s3");
const dotenv=require("dotenv");

dotenv.config();
const bucketName=process.env.BUCKET_NAME;
const bucketRegion=process.env.BUCKET_REGION;
const bucketAcessKey=process.env.ACCESS_KEY;
const secretKey=process.env.SECRET_KEY;

const s3=new S3Client({
    credentials:{
        accessKeyId:bucketAcessKey,
        secretAccessKey:secretKey, 
    },
    region :bucketRegion 
})

function getCommand(params){
const command=new PutObjectCommand({
    Bucket:bucketName,
    Key:params.originalName,
    Body:params.Body,
    ContentType:params.ContentType,

});
return command;
}

module.exports={s3,getCommand}