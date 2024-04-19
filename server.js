import express from "express";

import  mongoose  from "mongoose";
import bodyParser from 'express';
 import cors from 'cors';
 import crackerRouter from "./Routes/crackerRoute.js";

import userRouter from "./Routes/user.js";
const app = express();
mongoose.connect("mongodb+srv://divya1sagar:46uJE3uc1gYEm18S@cluster1.fxa3jht.mongodb.net/")

.then(() => console.log("conected mongodb"))
.catch((e) => console.log(e));

app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));
app.use(bodyParser.json());

app.use("/api", userRouter );
app.use("/api", crackerRouter)
 const PORT = 8080

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
