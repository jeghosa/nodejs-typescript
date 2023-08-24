const express= require("express")
import {Request, Response, NextFunction} from "express"
const jwt= require("jsonwebtoken")
import {JwtPayload} from "jsonwebtoken"
import { IIrequest } from "../controllers/icont"

// interface Dvalue extends Request{name:string , id:number}
type Iheader= {authorization: string}
interface Inrequest extends IIrequest{
    headers:Iheader
}

const auth= async(req:Inrequest, res:Response, next:NextFunction)=>{
    const authh = req.headers.authorization
    if (authh || authh?.startsWith("Bearer ") ) {
        const token:string = authh.split(" ")[1]
        const decoded = jwt.verify(token, "hfaffafafgttsgsgf") as JwtPayload
         const{name,id}= decoded
        //   const userpl = {name,id}
         req.user= {name, id}
        
        
        next()
    }
    else{ return res.status(401).json({msg:"unauthorized access"})}
}


export default auth