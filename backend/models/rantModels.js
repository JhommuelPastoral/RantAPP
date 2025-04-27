import mongoose from "mongoose";

const rantSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  message:{
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  },
  time:{
    type: String,
    required: true
  },

}, {timestamps: true});

const rant=  mongoose.model('rants', rantSchema);
export default rant;