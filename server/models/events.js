import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },

  status: {
    type: String,
    enum: ["ongoing", "upcoming", "completed"],
    default: "upcoming",
  },
  audience: {
    type: String,
    default: "open",
  },
  picture: {
    type: String,
  },
  society: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "societies",
    required: true,
  },
});

export default mongoose.model("events", EventSchema);
