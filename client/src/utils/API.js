import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    console.log("getbooks called");
    return axios.get("/api/books/");
  },
  
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("book data"+bookData.title);

      return( axios.post("api/books/", {
        title: bookData.title,
        image: bookData.image,
        authors: bookData.authors,
        description: bookData.description,
        link: bookData.link,
        volId: bookData.volID
      }))
    }
}
