const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    numtel:{
      type:String,
      required:true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
  },
  verification:{
    type:String,
    
  },
  active:{
    type:String,
  }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
