// const mongoose = require('mongoose');
// const dbgr=require("debug")("development:mongoose");
// const config=require("debug")("development:mongoose");
const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
//require("dotenv").config();

const mongoURI = `${process.env.MONGODB_URI}/scatch`;

mongoose
  .connect(`${process.env.MONGODB_URI}/scatch`)
  .then(() => dbgr("connected"))
  .catch((err) => dbgr(err));

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected Successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB Error:", err);
});
module.exports = mongoose.connection;
