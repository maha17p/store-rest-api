import { StatusCodes } from "http-status-codes"
import BadRequestError from "../errors/bad-request";
import crypto from 'crypto';
import User from "../modals/User";


const registerUser = async(req,res) => {
    const {name,email,password} =req.body;
    const emailAlreadyExists = await User.findOne({email})
    // if(emailAlreadyExists){
    //     throw new BadRequestError("Email already exists")
    // }
    const isFirstAccount = (await User.countDocuments({})) === 0; 
    const role = isFirstAccount ? "admin":"user";
    const verificationToken = crypto.randomBytes(40).toString('hex');
    // console.log({verificationToken});
    const user = await User.create({
        name,email,password,role,verificationToken
    })
    res.status(StatusCodes.OK).json({user})
};


export {
    registerUser
}