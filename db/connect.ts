import mongoose from "mongoose"



export function  connectdb  (url:string){
     mongoose.connect(url)
}
