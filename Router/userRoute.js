import express from "express";
const userRoute=express.Router();
import {registerController,loginController, userContoller ,searchController,postUserController} from "../Controller/userController.js"

//By Param
userRoute.get("/:uname",userContoller)
//By Query String
userRoute.get("/search",searchController)

//Post method
userRoute.post("",postUserController)
userRoute.post("/register",registerController);
userRoute.post("/login",loginController);
export default userRoute;