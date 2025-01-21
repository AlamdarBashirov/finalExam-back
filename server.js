import { configDotenv } from "dotenv";
import express from 'express'
import cors from 'cors'
import { ConnectDB } from "./config/config.js";
import productRouter from "./router/productRouter.js";
import basketRouter from "./router/basketRouter.js";

configDotenv()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors("*"))

ConnectDB()

app.use("/products", productRouter)
app.use("/basket", basketRouter)

app.listen(5500, () => {
    console.log('backend running');
    
})