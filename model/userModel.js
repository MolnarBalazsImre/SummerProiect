const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    email:{
        type: String,
        require: true,
        min: 2,
        max: 255
    },
    password:{
        type: String,
        require: true,
        max: 255,
        min: 6
    },
    date:{
        type: Date,
        default: Date.now
    },
    imageURL:{
        type: String,
        require: false,
        min:10,
        default: 'Not photogane type'
    },
    friends: [String]
});
module.exports = mongoose.model('User',userSchema);