import bodyParser from 'body-parser';
import cors from 'cors';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;

// const users = [
//     {id:101,name:'abc'},
//     {id:102,name:'def'},
//     {id:103,name:'efg'},
//     {id:104,name:'hij'},
//     {id:105,name:'klm'}
// ]

// app.get('/users', (req,res) => {
//     res.json(users);
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());



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

app.use(function(req,res,next){
    console.log("Middleware before API call.");
    next();
})

app.get('/', (req,res) => {
    res.json({
        msg: "API is Running"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at port number ${PORT}`);
})