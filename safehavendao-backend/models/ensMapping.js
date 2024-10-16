// Importing mongoose using ES modules syntax
import mongoose from "mongoose";

// Defining the schema
const ensMappingSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  ensBasename: { type: String, required: true },
});

// Exporting the model using ES modules syntax
export default mongoose.model("EnsMapping", ensMappingSchema);
