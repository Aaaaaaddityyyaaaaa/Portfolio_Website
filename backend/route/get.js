import express from "express"
import { Element } from "../model/portfolio.js";
const route = express.Router() ; 
route.get("/api/get" ,async(req,res)=>{
  try{
    const elements = await Element.find();
  res.status(200).json(elements)
  }
  catch(error)
  {
    console.error(error)
    res.status(500).json("Error Occured While fetching")
  }
  
}) ;
export default route ;  