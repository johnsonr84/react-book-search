import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from 'axios'

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [searchField, setSearchField] = useState("");
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadBooks()
  // }, [])

  function searchBook(event){
    // event.preventDefault(event);
     axios.request({
       method: 'get',
       url:"https://www.googleapis.com/books/v1/volumes?q="+ formObject.title})
     .then((res)=>{
       setBooks( res.data.items);
     })
   }

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value}) 
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault(); 
      if(formObject.title){
        setSearchField(formObject.title)
        searchBook();
      }
      else{
        setSearchField(formObject.author);
        searchBook();
      }
  };


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Let's Find A Good Read!</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={() => {}}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={() => {}}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={() => {}}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={() => {}}
              >
                Search
              </FormBtn>
            </form>
          </Col>

 
          <div style={{marginTop:50}}>
           
           <h1 style={{display:"inline-block", marginLeft: "30px"}}>Suggestions</h1>
           <h1 style={{display:"inline-block", float:"right", marginRight: "30px"}}><Link to="/SavedBooks">Saved Books</Link> </h1>
    
         
         <BookList books = {books}/>
           
         </div>

      </Container>
    );
  }


export default Books;
