const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoute = require('./Routes/Employee');
const cors = require('cors');
const { application } = require('express');

mongoose.connect("mongodb://localhost:27017/EmployeeManagement",{
useNewUrlParser:true,
});




const app = express();

//Allow Access from Front 

app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use('/employees',employeeRoute);

//port 
const port = 2021;

//Rest API
app.get('/',(req,res)=>{
    res.send('Employee Data displayed');
})

//Db connection Here
const dataBase = mongoose.connection;
dataBase.on("error",console.error.bind(console,"Connection Error:"));
dataBase.once("open", ()=>{
    console.log("Connected Successefully!");
})
app.listen(port,()=>{
    console.log(`Server Running on Port: ${port}`);
});
