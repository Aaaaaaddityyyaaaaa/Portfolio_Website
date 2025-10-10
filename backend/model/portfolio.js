import mongoose from "mongoose";
const schema = mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  tech: { type: [String], default: [] },
  link: { type: String, required: true }
})
export const Element = mongoose.model('Element' , schema)