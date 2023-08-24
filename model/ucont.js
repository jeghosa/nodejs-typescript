"use strict";
var mongoose = require("mongoose");
var cschema = new mongoose.Schema({ title: { type: String, required: true }, message: { type: String, requred: true }, createdby: { type: mongoose.Types.ObjectId, ref: "Users" } });
module.exports = mongoose.model("Items", cschema);
