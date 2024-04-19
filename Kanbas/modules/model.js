import mongoose from "mongoose";
import modulesSchema from "./schema.js";
const model = mongoose.model("ModulesModel", modulesSchema);
export default model;