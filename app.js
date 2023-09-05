import express from 'express';
import cors from 'cors';


const app = express();
const PORT_NUM = 5000;


app.listen(PORT_NUM,() => console.log(`App is listening to ${PORT_NUM}`))