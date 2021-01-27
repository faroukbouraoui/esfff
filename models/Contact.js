const mongoose = require ('mongoose')
const Email = require('mongoose-type-email')

const ContactModel = new mongoose.Schema({
   
    nom:{
        type:String,
        
    },
    email:{
        type:Email,
    
    },
    phone:{
        type:Number,
        
    },
    demande:{
        type:String,
        
    }
})
module.exports = mongoose.model('Contact',ContactModel)