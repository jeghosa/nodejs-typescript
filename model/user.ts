import mongoose,{Schema,Document} from "mongoose"
const bcrypt= require ("bcryptjs")
 export interface Iuser{name:string, password:string, email:string}

export interface Iusers extends Document{name:string, password:string, email:string, pcompare: (cpassword:string)=>boolean
  
}

const uSchema:Schema= new mongoose.Schema({name:{type:String,required:true},password:{type:String,required:true},email:{type:String,unique:true,match:[/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ , "please provide valid email"]}})

uSchema.methods.pcompare= async function( cpassword:string):Promise<boolean>{
     return  await bcrypt.compare(cpassword, this.password)

}
export default mongoose.model<Iusers>("User", uSchema)