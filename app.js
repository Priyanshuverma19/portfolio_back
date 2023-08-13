import express from 'express';
import {config} from "dotenv";
import cors from "cors";


config({
    path:"./config/config.env",
})
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

import form from "./routes/formroute.js"
app.use("/api/v",form)

export default app;