const express = require('express');
const session = require('express-session');
const { connectDB }= require('./config/db');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');

const path = require('path');

const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(session({
    secret:"sdac",
    resave:false,
    saveUninitialized:false,
}))


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/",authRoute);
app.use("/",userRoute)

app.listen(4000,()=>{
    console.log("running");
})