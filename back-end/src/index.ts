import express from "express";
import dotenv from "dotenv";

dotenv.config(); 
const port = process.env.PORT || 5002; 
const app = express();

const appStart = () => {
    try {
        app.listen(port, () => {
            console.log(`The app is running at http://localhost:${port}`)
        })
    } catch (e) {
        console.log(e)
    }
}

appStart();
