import mongoose from "mongoose";
import validator from "validator";

const schema =new mongoose.Schema({
    name:{
      type:"string",
      required:[true,"please enter your name "]  
    },
    email:{
       type:"string",
       required:[true,"please enter your email"] ,
       validate:[validator.isEmail,"please enter a valid email"]
    },
    message:{
        type:"string",
        required:[true,"please enter your message"]
    }
    
})

export const Pfuser=mongoose.model("Pfuser",schema);