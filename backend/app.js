import express from "express"
import cors from "cors"
import route from "./route/get.js";
import { connect } from "./connect/db.js";

const app = express() ; 
app.use(cors()) ; 
app.use(express.json());  
app.use(route)
connect()
.then(()=>app.listen(5000))

 