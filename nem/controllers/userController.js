const userModel = require("../models/userModel")

exports.user = async (rq,rs) => {
    try {
        const user = await userModel.find();
        rs.render("user/dashboard", { user });
    } catch (err) {
        console.log(err);
     
        rs.status(500).send("Internal Server Error");
    }
};

exports.update = async (rq,rs) => {
    try {
        const user = await userModel.findById(rq.params.id);
        rs.render("user/update", { user });
    } catch (err) {
        console.log(err);
        rs.status(500).send("Internal Server Error");
    }
};

exports.addUser = async (rq,rs) => {
    try {
        const data = new userModel({
            name:rq.body.name,
            email:rq.body.email,
            age:rq.body.age
        });
        await data.save();
        rs.redirect('/');
    } catch (error) {
        console.log(error);
    }
};


exports.updateUser = async (rq,rs) =>{
    try {
        await userModel.findByIdAndUpdate(rq.params.id, rq.body, {
            new: true,
        });        
        rs.redirect('/');
    } catch (error) {
        console.log(error);
    }
};

exports.deleteUser = async (rq,rs) => {
    try {
        await userModel.findByIdAndDelete(rq.params.id)
        rs.redirect('/');
    } catch (error) {
        console.log(error);
        
        
    }
}

