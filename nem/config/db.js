const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/nem")
    .then(() =>{
        console.log("connected");
        
    })
    .catch((err)=>{
        console.log(err);
        
});
};

module.exports = { connectDB };