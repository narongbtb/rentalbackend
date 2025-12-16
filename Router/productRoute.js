import express from "express";
const myroute=express.Router();
import { addProductController,updateProduct,removeProduct,fetchProduct} from "../Controller/productController.js"


//Post method
myroute.post("",addProductController);
myroute.post("/update",updateProduct);
myroute.post("/delete",removeProduct);
myroute.get("/fetch",fetchProduct);
export default myroute;