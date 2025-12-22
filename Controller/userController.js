import {User} from "../Model/UserModel.js"
import bcrypt from "bcrypt"
export const userContoller=(req,res)=>{
    const name=req.params.uname;
    res.send(`Hello ${name}`)
}

export const searchController=(req,res)=>{
    const keyword=req.query.keyword;
    const id=req.query.id;
    res.send(`Searching for ${keyword} and ${id}`);
}

export const postUserController=(req,res)=>{
    console.log(req.headers);
    console.log(req.body);
    console.log(req.method);
    console.log(req.url);
    // res.send(`User Created`+JSON.stringify(req.body))
    res.json({
        code:"201",
        data:req.body
    })
}

export const registerController=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const newUser=new User({
            email:email,
            password:password
        })
        const user=await newUser.save();
        res.status(200).json({
            code:200,
            data:user
        })
    } catch (error) {
       res.status(400).json({
            code:400,
            message:error.message
       }) 
    }
}

export const loginController=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email:email});
        if(!user){
            return res.status(400).json({
                code:400,
                message:"Invalid Email"
            })  
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                code:400,
                message:"Invalid Password"
            })  
        }
        res.status(200).json({
            code:200,
            data:user
        })
    } catch (error) {
        res.status(400).json({
            code:400,
            message:error.message
       })  
    }
}