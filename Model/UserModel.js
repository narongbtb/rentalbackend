import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
},
{
    timestamps:true,minimize:false
})

userSchema.pre("save",async function () {
    if(!this.isModified("password")) return ;

    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt); 
})


export const User=mongoose.model("User",userSchema);