const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const verify = require('./Routes/verifyToken');
dotenv.config();

const app = express();
//---DB---//
mongoose.connect(process.env.DB_DATA,{useNewUrlParser: true,useUnifiedTopology: true},()=>{
    console.log('Connected to the db');
});
//Webpage
app.use(express.json())
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: false}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})
app.get('/login',verify,(req,res)=>{
    res.send('Success');
})
//---Routes---//
const authRoute = require('./Routes/auth');
const logedRoute = require('./Routes/loged');
//---Middlewares---//

app.use('/user', authRoute);
app.use('/loged', logedRoute);


app.listen(3000,()=>{
    console.log('Server online');
});