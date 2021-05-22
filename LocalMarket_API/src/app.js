// import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { mainRouter } from './api';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/LocalMarket');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

app.get('/',(req,res) => {
    res.json({
        msg: 'API Running'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at port number ${PORT}`);
})

app.use('/main', mainRouter);

app.use((req,res,next) => {
    const error = new Error("Not Found");
    error.status = 404;
    error.message = "Invalid Route";
    next(error);
})
app.use((error,req,res,next) => {
    res.status(error.status || 500);
    return res.json({
        error:{
            message: error.message
        }
    })
})