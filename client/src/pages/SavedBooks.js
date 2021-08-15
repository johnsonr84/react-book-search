import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { SavedBookList } from "../components/SavedBookList";

import axios from 'axios'

function SavedBooks() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

  //Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  //Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => {
        setBooks(res.data)
        console.log(res);
      }
      )
  };

  //Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Jumbotron>
        <h1>My Saved Books</h1>
      </Jumbotron>
      <div style={{ marginTop: 50 }}>
        <h1 style={{ textAlign: "right", marginRight: "30" }}><Link to="/">Search</Link> </h1>
      </div>
      <div>
        <SavedBookList books={books} loadBooks={loadBooks} />
      </div>
    </Container>
  );
}


export default SavedBooks;