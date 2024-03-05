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

// app.use("/api/v1/coffees", async (req, res) => {
//     try{
//         const coffees = await CoffeeData.find();
//         console.log("coffees: ", coffees);
//         res.json({
//             status: "success",
//             data: {
//                 coffees
//             }
//         })
//     }catch(err){
//         res.status(500).json({
//             status: "error",
//             message: err.message
//         })
//     }
// });
export  {app};

