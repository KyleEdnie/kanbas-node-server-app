import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,},
  { collection: "courses" });
export default coursesSchema;