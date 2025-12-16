import { Person } from "../Model/Person.js";
export const addPersonController=async (req,res)=> {
    try {
        const {email,name,age}=req.body;
        const newPerson=new Person({
            name,
            email,
            age
        })
        await newPerson.save();
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

export const updatePerson=async (req,res)=>{
    try {
        const {id,email,name,age}=req.body;
        const person=await Person.findByIdAndUpdate(
            id,
            {$set:{email:email,name:name,age:age}},
            {new:true}
        );
         res.json({
            code: "201",
            data: person
        })
    } catch (error) {
        res.json({
            code: "401",
            data:error.message
        })
    }
}

export const removePerson=async (req,res)=>{
    try {
        const {id}=req.body;
        const person=await Person.findByIdAndDelete(id);
         res.json({
            code: "201",
            data:person
        })
    } catch (error) {
         res.json({
            code: "401",
            data:error.message
        })
    }
}

export const fetchPerson=async (req,res)=>{
    try {
        const {page ,limit}=req.query;
        let skip=(page-1)*limit;
        const person=await Person.find()
        .skip(skip)
        .limit(limit);  
        res.json({
            code: "201",
            data:person 
        })

    } catch (error) {
         res.json({
            code: "401",
            data:error.message
        })
    }
}