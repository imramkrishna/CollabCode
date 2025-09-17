import express,{Request,Response,Express} from "express"

const app:Express=express();

app.use(express.json())

app.get("/",(req:Request,res:Response)=>{
    res.send("Backend server for collab code is running");
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})