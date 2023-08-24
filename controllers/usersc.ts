const express = require ("express")
import {Request, Response,NextFunction} from "express"
 import User from "../model/user"
 import {Iuser} from "../model/user"
const bcrypt= require ("bcryptjs")
const jwt = require ("jsonwebtoken")

  type Status= any

  type Body = {
    name:string,
     email:string,
     password:string
 }
interface IRequest extends Request{
  body:Body
}

interface IResponse extends Response{
  status:Status
}

 const signu= async (req:Request, res:Response):Promise<any>=>{
    try {
      
        let {name,email,password}= req.body 
      if (!name || !email || !password) {
        return res.status(201).json({msg: "provide credentials"})
        
      }
      else{
        
          const salt= await bcrypt.genSalt(10)
        password= await bcrypt.hash(password, salt)
        // console.log(req.body)

      //  let user =  new User({name,email,password})

       const user=  await User.create({name,email,password})
      
                
      return  res.status(201).json(user)
      }
        
    } catch (error:any) {
        res.status(500).json({msg:error.msg})
        
    }
}
export const loginu = async(req:Request, res:Response, next:NextFunction)=>{
    try {let {name,email,password}= req.body
        const user = await User.findOne({email})
        console.log(user)
        if (!user){
           return  res.status(400).json({msg:"no such user"})

      }
        else{
            const compared: boolean= await user.pcompare(password)
            if (!compared) {
                return res.status(400).json({msg:"incorrect password"})
                
            }
             const token = jwt.sign({name:user.name, id:user._id},"hfaffafafgttsgsgf")
             res.cookie("jwt",token,{httpOnly:true, secure:true,maxAge:24*60*60*1000})
        return res.status(200).json({token})
        }
        
    } catch (error:any) {
       return  res.status(500).json({msg:error.msg})
        
    }
}
export default signu