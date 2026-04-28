const express=require("express")
const app=express()
const db=require("../Server/config/db")
const dotenv=require("dotenv").config()
const cors=require("cors")
const router=require("../Server/Router/todoRouter")

app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000'
}))

db(process.env.MONGO_URL)

app.use("/todo",router)
app.listen(process.env.PORT,()=>{
    console.log(`Server running in ${process.env.PORT}`)
})