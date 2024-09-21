import mongoose from "mongoose";

const societySchema = new mongoose.Schema({
  societyName: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    // data: Buffer, until media uploads donot start
    type: String,
    required: true,
  },
  societyCreatedOn: {
    type: Date,
    default: Date.now(),
  },
  banner: {
    type: String,
    required: true,
  },
  moreImages: {
    type: [String],
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "admins",
  },
});

export default new mongoose.model("Societies", societySchema);
