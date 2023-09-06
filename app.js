import express from 'express';
import dotenv from 'dotenv'
import 'express-async-errors'
// import external files
import connectDB from './db/connect.js';
import errorHandler from './middlewares/error-handler.js';
import notFoundHandler from './middlewares/not-found.js';
import authRouter from './routes/authRouter.js';

// invoke
const app = express();
dotenv.config()
const PORT_NUM = 5000;
app.use(express.json());


//routes
app.get("/",(req,res) => {
    res.status(200).json({msg:"success"})
})
app.use("/api/v1/user",authRouter)
//middleware
app.use(errorHandler)
app.use(notFoundHandler)

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