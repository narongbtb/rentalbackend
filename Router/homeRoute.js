import express from "express";
const homeRoute=express.Router();
import  {emptyController,homeController}  from "../Controller/homeController.js"

//Basic Route
homeRoute.get("/",emptyController)
homeRoute.get("/home",homeController)

export default homeRoute;