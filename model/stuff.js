const mongoose = require('mongoose');

const stuffSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true,
            min: 1,
            max: 255  
        },
        genre:{
            type: String,
            min: 1,
            max: 255  
        },
        rate:
        {
            type: String
        },
        link:{
            type: String
        },
        userID:{
            type: String,
            require: true
        },
        createdAt:{
            type: Date,
            default:Date.now
        }
    }
);

module.exports = mongoose.model('Stuff',stuffSchema);