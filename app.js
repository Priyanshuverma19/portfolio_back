import express from 'express';
import {config} from "dotenv";
import cors from "cors";


config({
    path:"./config/config.env",
})
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(cors(
{
    origin:process.env.FRONTEND_URL,
    credentials:true,
    methods:["GET","POST","DELETE","PUT"],
}
    
));
app.use(express.urlencoded({extended: true}));

import form from "./routes/formroute.js"
app.use("/api/v",form)

export default app;