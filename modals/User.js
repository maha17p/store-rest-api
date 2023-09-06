import mongoose from 'mongoose';
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide name"],
        minlength:3,
        maxlength:50,
    },
    email:{
        type:String,
        required:[true, "Please provide email"],
        unique:true,
         validate:{
            validator:validator.isEmail,
            message:"Please provide valid email"
         }
    },
    password:{
        type:String,
        required:[true, "Please provide password"],
        minlength:6
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    verificationToken:String
})

export default mongoose.model("User", userSchema);