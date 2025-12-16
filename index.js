import express, { json, urlencoded } from "express"
const app=express()
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const PORT=process.env.PORT;

import "./Config/db.js"

import homeRoute from "./Router/homeRoute.js"
import userRoute from './Router/userRoute.js';
import pRoute from './Router/personRoute.js';

import productRoute from './Router/productRoute.js';

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use("/",homeRoute)
app.use("/user",userRoute)
app.use("/person",pRoute)
app.use("/product",productRoute)


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})