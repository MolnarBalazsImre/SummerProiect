const router = require('express').Router();
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register',async (req,res)=>{
    console.log(req.body);

//Check email DB
     const ruser = await User.findOne({email: req.body.remail});
     if(ruser) return res.status(400).send('Email is already exist');

//Hash Password
const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(req.body.rpassword,salt);

//Create User
    const user = new User({
        name: req.body.rname,
        email: req.body.remail,
        password: hashPassword
    });
    try{
       const savedUser = await user.save();
       console.log('REgistered');
       res.send('User registered!');

    }catch(err){
           res.status(400).send(error);
    }
});

router.post('/login',async (req,res)=>{

//Email exist
    const luser = await User.findOne({email: req.body.lemail});
        if(!luser) return res.status(400).send('Email or password is wrong');

//Password is good
    const validPass = await bcrypt.compare(req.body.lpassword,luser.password);
    if(!validPass) return res.status(400).send('Password is incorrect');
//Web token
    const token = jwt.sign({_id: luser._id}, process.env.TOKEN_SECRET);
    res.header('token',token).send(luser._id);
})

module.exports = router;