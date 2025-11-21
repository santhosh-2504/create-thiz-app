import mongoose from "mongoose";

const SampleSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

export default mongoose.model("Sample", SampleSchema);

