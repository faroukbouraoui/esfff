const mongoose = require ('mongoose');
const Offres = require('./Offres');
require('mongoose-type-email');
const { ObjectId } = mongoose.Schema;
const leadSchema = new mongoose.Schema({
    NomComplet:{
        type:String,
        required:true
    },
    
    entreprise:{
        type:String,
        required:true
    },
    rne:{
        type:Number,
    },
    numtel:{
        type:Number,
        required:true
    },
    email:{
        type:mongoose.SchemaTypes.Email,
        required:true

    },
    adresse:{
        type:String
    },
    refOffre:{
        type:ObjectId,
        ref:"Offres",
        
    },
    refTemplate:{
        type:ObjectId,
        ref:"Template"
    },
    refService{
        type:ObjectId,
        ref:"Service"
    }
    
})

module.exports = mongoose.model('Lead',leadSchema)