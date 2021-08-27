const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/userModel');
const Stuff = require('../model/stuff');
const bcrypt = require('bcryptjs');

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/User/loged.html');
})
router.post('/userData',verify,async (req,res)=>{
    console.log(req.body);
    const data = await User.findById(req.body.id);
    res.send(data);
})
router.post('/change',verify,async (req,res)=>{
    const dat = req.body;
    const pass = dat.newPassword;
    if(pass.length==0)
    { 
        const update = {
            name: dat.newName,
            email: dat.newEmail
        }
        await User.findByIdAndUpdate(dat.id,update,{new: true,useFindAndModify:false},(err,model)=>{
            if(err) return console.log('Error #1'+err);
            console.log('Update utan: '+model);
        })
    }
    else
    {
        const salt = await bcrypt.genSalt(10);
        console.log(req.body.password);
        const hashPassword = await bcrypt.hash(req.body.newPassword,salt);salt

        const update = {
            name: dat.newName,
            email: dat.newEmail,
            password: hashPassword
        }
        await User.findByIdAndUpdate(dat.id,update,{new: true,useFindAndModify:false},(err,model)=>{
            if(err) return console.log(err);
            console.log(model);
        }) 
    }
    res.send('Success');
})
router.post('/add',(req,res)=>{
    const stuff = new Stuff({
         name: req.body.Title,
         genre: req.body.Gen,
         rate: req.body.Rate,
         link: req.body.Link,
         userID: req.body.uID,
         season: req.body.season,
         episod: req.body.ep  
    })
    console.log(req.body);
    try {
        stuff.save();
        console.log('Save');
        res.send('Saved');
    } catch (error) {
        console.log('Error');
    }
})
router.post('/changeStuff',(req,res)=>{
    console.log(req);
})
router.get('/showAll',(req,res)=>{
    Stuff.find((err,data)=>{
        if(err) return console.log(err);
        console.log(data);
        res.send(data);
    });
    
    
})
module.exports = router;