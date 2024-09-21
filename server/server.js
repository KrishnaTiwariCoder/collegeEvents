import env from "dotenv";
env.config();
import bcrypt from "./bcrypt.js";
bcrypt;
import express from "express";
import router from "./routes/index.js";
import mongoose from "mongoose";
import cors from "cors";

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
  console.log("db connected");
});

const app = express();

app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("SERVER LISTENING AT", process.env.PORT);
});
