const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { },
  description: String,
  image: { type: String},
  link: {type: String},
  volID: {type:String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
