import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    course: String,},
  { collection: "users" });
export default modulesSchema;