const express = require("express");
const app=express()
const router=require("./router/index")
app.use(express.json())

app.use(router)

app.listen(2000,()=>{
    console.log("welcome to server");
})