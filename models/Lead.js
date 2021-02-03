const mongoose = require("mongoose");

require("mongoose-type-email");
const { ObjectId } = mongoose.Schema;
const leadSchema = new mongoose.Schema({
  raionSocial: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required:true
  },
  catproduit:{
    type:String,
  },
  produit:[
    {
      type:String
    }
  ],
  facebookLink:{
    type:String,
  },
  instagramLink:{
    type:String,
  },
  sitewebLink:{
    type:String,
  },
  refOffre: {
    type: String,
  },
  refTemplate: {
    type: String,
  },
  refuser: {
    type: ObjectId,
    ref: "User",
  },
  
    
 
});

module.exports = mongoose.model("Lead", leadSchema);
