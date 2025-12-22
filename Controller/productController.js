import { Product } from "../Model/Product.js";
export const addProductController=async (req,res)=> {
    try {
        const {name,price,cost}=req.body;
        const newProduct=new Product({
            name,
            price,
            cost
        })
        await newProduct.save();
        res.json({
            code: "201",
            data:"Success"
        })
    } catch (error) {
         res.json({
            code: "401",
            data:error.message
        })
    }
}

export const updateProduct=async (req,res)=>{
    try {
        const {id,name,price,cost}=req.body;
        const product=await Product.findByIdAndUpdate(
            id,
            {$set:{name:name,price:price,cost:cost}},
            {new:true}
        );
         res.json({
            code: "201",
            data: product
        })
    } catch (error) {
        res.json({
            code: "401",
            data:error.message
        })
    }
}

export const removeProduct=async (req,res)=>{
    try {
        const {id}=req.body;
        const product=await Product.findByIdAndDelete(id);
         res.json({
            code: "201",
            data:product
        })
    } catch (error) {
         res.json({
            code: "401",
            data:error.message
        })
    }
}

export const fetchProduct=async (req,res)=>{
    try {
        const {page ,limit}=req.query;
        let skip=(page-1)*limit;
        const product=await Product.find()
        .sort({createdAt:-1})
        .skip(skip)
        .limit(limit);  
        res.json({
            code: "201",
            data:product 
        })

    } catch (error) {
         res.json({
            code: "401",
            data:error.message
        })
    }
}