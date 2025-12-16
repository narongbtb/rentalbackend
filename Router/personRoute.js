import express from "express";
const myroute=express.Router();
import { addPersonController,updatePerson,removePerson,fetchPerson} from "../Controller/personController.js"


//Post method
myroute.post("",addPersonController);
myroute.post("/update",updatePerson);
myroute.post("/delete",removePerson);
myroute.get("/fetch",fetchPerson);
export default myroute;