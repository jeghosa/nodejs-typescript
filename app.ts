  
const express = require("express")
const {Request, Response}= require("express")
import mongoose from "mongoose"
const cors = require( "cors")
import {connectdb} from "./db/connect"
import auth from "./middleware/auth"
import urouter from "./router/user"
import crouter from "./router/content"
 const app= express()
 const router= express.Router()
 interface Iresp extends Response{
    status: number
 }
 
 const corsOption= {"Access-Control-Allow-Origin": "*",
   Method:["POST ", "GET","UPDATE", "DELETE"],Headers: "Content-Type",
   optionsSuccessStatus:200, Credentials: true}


app.use(cors())

app.get("/",(req:Request,res:any)=>{
    res.status(200).json({msg:"typescript fullstack"})
})
app.use(express.json())
app.use("/api/users", urouter)
app.use("/api/items",auth,crouter)


const port = process.env.PORT || 4000
const start= async()=>{
    await connectdb("mongodb+srv://jeghosa:jsureeva@cluster0.spmtchq.mongodb.net/?retryWrites=true&w=majority")
app.listen(port, ()=>console.log(`app is listening on port ${port}`))}


start()



