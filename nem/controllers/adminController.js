const bcrypt = require('bcrypt');
const adminModel = require('../models/adminModel');

exports.registerForm = async(rq,rs) =>{
    let warn = 0;
    rs.render('auth/register', { warn: null });
}

exports.loginForm = async(rq,rs) =>{
     rs.render('auth/login', { warn: null });
}

exports.register = async (rq,rs) =>{
    try {
    const {adminName,email,password} = rq.body;
   const admin = await adminModel.findOne({ email });

if (admin) {
  return rs.render('auth/register', { warn: 'Email already exists' });
}
    const hashPassword = await bcrypt.hash(password,10);
    const data = new adminModel({adminName,email,password:hashPassword});
    await data.save();
    rs.redirect('/login')
    } catch (error) {
        console.log(error);
    }
}

exports.login = async(rq,rs)=>{
    const {email,password} = rq.body;
    const admin = await adminModel.findOne({email});
   if (!admin) {
  return rs.render('auth/login', { warn: 'Email does not exist' });
}
    const isMatch = await bcrypt.compare(password,admin.password);
    if (!isMatch) {
         return rs.render('auth/login', { warn: "Invalid credentials" });
    }
    rq.session.adminID = admin._id;
    rs.redirect("/");
}

exports.logout = (rq,rs)=>{
    rq.session.destroy((err)=>{
        rs.end("Error occuredd")
    })
    rs.redirect('/login')
}