import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
  formName: { type: String, required: true },
  description: { type: String, required: true },
  eventID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "events",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "selected", "rejected"],
    default: "pending",
  },
  fields: {
    type: [{ question: { type: String }, answer: { type: String } }],
  },
  appliedAt: { type: Date, default: Date.now() },
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
    // required: true,
  },
});

export default mongoose.model("forms", RegistrationSchema);
