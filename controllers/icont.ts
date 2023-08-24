const express = require("express")
import {NextFunction, Request,Response } from "express"
const auth= require("../middleware/auth")

const Items = require("../model/ucont")
type User= {name:string,
id:string}
 export interface IIrequest extends Request{
    user:User
}


const createi= async(req:IIrequest,res:Response, next:NextFunction)=>{
    const {title,message}= req.body
    console.log(req.user)

    req.body.createdby= req.user.id
    const item = await Items.create(req.body)
    
    return res.status(201).json(item)
}

export const geti= async(req:any, res:any)=>{
   const createdby= req.user.id
//    const iid= req.params.id

const item= await Items.find({createdby})
return res.status(200).json(item)

}

export default createi
