import express from "express"
import { Element } from "../model/portfolio.js";
const route = express.Router() ; 
route.get("/api/get" ,async(req,res)=>{
  const elments = await Element.find();
  res.json({elements: Element})
}) ;
export default route ;  