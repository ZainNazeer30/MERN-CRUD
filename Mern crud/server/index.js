import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import dotenv from "dotenv"
import router from "./Routes/userRoute.js"
import cors from "cors"

const app = express();
dotenv.config();

app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;


mongoose
.connect(MONGOURL)
.then(()=>{
    console.log(`DB conntected successfully`);
    app.listen(PORT, ()=> {
        console.log(`server is running on port: ${PORT}`)
    })
}) .catch((error) => console.log(error));


app.use('/users/api', router)
