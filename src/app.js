import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {CoffeeData} from "./models/coffeeData.model.js";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: "20kb"}));
app.use(express.urlencoded({extended: true, limit: "20kb"}));
app.use(express.static("public"));
app.use(cookieParser());



//Routes
import userRouter from "./routes/user.routes.js";


//Routes declaration
app.use("/api/v1/users", userRouter);

export  {app};

