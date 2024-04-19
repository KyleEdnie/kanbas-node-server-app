import mongoose from "mongoose";
import coursesSchema from "./schema.js";
const model = mongoose.model("CoursesModel", coursesSchema);
export default model;