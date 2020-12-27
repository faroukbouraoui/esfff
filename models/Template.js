const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const templateSchema = new mongoose.Schema(
    {
        fileName: {
            type: String,
            required: true,
        },
        title:{
            type:String,
            required: true,
        },

      
    },
    { timestamps: true }
);

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;