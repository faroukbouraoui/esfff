const mongoose = require("mongoose");
const Offres = require("./Offres");
require("mongoose-type-email");
const { ObjectId } = mongoose.Schema;
const leadSchema = new mongoose.Schema({
  NomComplet: {
    type: String,
    required: true,
  },

  entreprise: {
    type: String,
    required: true,
  },
  rne: {
    type: Number,
  },
  numtel: {
    type: Number,
    required: true,
  },

  adresse: {
    type: String,
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
  refService: [{
    type: String,
  }]
    
 
});

module.exports = mongoose.model("Lead", leadSchema);
