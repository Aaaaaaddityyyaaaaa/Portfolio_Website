import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
export const connect =async ()=>{
  try
  {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("db connected")
  }
  catch(err)
  {
    console.error(err) ; 
    process.exit(1) ; 
  }
  
}

