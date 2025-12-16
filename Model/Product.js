import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    
    cost:{
        type:Number,
        require:true
    }
},
{
    timestamps:true,minimize:false
})

export const Product=mongoose.model("Product",productSchema);