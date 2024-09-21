import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  profilePicture: {
    // data: Buffer, until media uploads donot start
    type: String,
    required: true,
  },
  accountCreatedOn: {
    type: Date,
    default: Date.now(),
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  activated: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "admin",
  },
});

export default new mongoose.model("Admins", adminSchema);
