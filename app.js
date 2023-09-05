import express from 'express';
import dotenv from 'dotenv'
// import external files
import connectDB from './db/connect.js';

// invoke
const app = express();
dotenv.config()
const PORT_NUM = 5000;


// 

// connect DB
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT_NUM,() => console.log(`App is listening to ${PORT_NUM}`))

    } catch (error) {
        console.log({error});
    }
}
start()