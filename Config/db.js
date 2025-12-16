import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const MONGO_URI=process.env.MONGO_URI;

await mongoose.connect(MONGO_URI).then(()=>{
    console.log("Database Connected");
})