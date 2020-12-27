const mongoose = require ('mongoose')
const { ObjectId } = mongoose.Schema;
const offersSchema = new mongoose.Schema({
    
    fileName: {
        type: 'String',
        required: true,
    },
    
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    
    servicesOffre:[
        {
            type: ObjectId,
            ref: "Service",
            required: true
        }

    ],
    template:[
        {
            type: ObjectId,
            ref: "Template",
            required: true,
        }
    ]


})
module.exports = mongoose.model('Offres',offersSchema)