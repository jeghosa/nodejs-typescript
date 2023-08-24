  const mongoose = require("mongoose")
// const {Schema,Document:any} = require("mongoose")


interface Contenti {title:string,message:string,}

interface Icont extends Contenti, Document{}

const cschema = new mongoose.Schema({title:{type:String,required:true},message:{type:String,requred:true},createdby:{type:mongoose.Types.ObjectId, ref:"Users"}})

 module.exports= mongoose.model("Items", cschema)

