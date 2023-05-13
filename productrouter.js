import express from "express"
import Router from "express"
let product = Router()
export default product


product.use(express.json());
let arr2=[{
    "ProductID": "1",
    "productName" : "AAA",
    "costPerUnit": 30,
    "units": 2
}]
product.post("/add",(req,res)=>{
        let ans=req.body
        arr2.push(ans)
        res.send(arr2)
})

product.get("/getInfo",(req,res)=>{
    
})