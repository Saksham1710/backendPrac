//require("dotenv").config({ path: "./.env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";


dotenv.config({
     path: "./.env" 
    });

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server started at http://localhost:${process.env.PORT}`);   
})
})
.catch((error)=>{
    console.error("Failed connecting to mongo!!!: ", error)
}
);





























// import express from "express";
// const app=express();

// // this is called iffy
// ;(async ()=> {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.error("Error starting server", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`Server started at http://localhost:${process.env.PORT}`)
//         } )

//     } catch(error){
//         console.error("Error connecting to mongo", error)
//     }
// })()

