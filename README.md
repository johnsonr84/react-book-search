# react-book-search
assignment 21

  [![github-follow](https://img.shields.io/github/followers/johnsonr84?label=Follow&logoColor=lightgrey&style=social)](https://github.com/johnsonr84)
  [![project-languages-used](https://img.shields.io/github/languages/count/johnsonr84/readme-generator?color=orange)](https://github.com/johnsonr84/react-book-search)
  [![project-top-language](https://img.shields.io/github/languages/top/johnsonr84/readme-generator?color=yellow)](https://github.com/johnsonr84/react-book-search)
  [![license](https://img.shields.io/badge/license-mit-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

  ## Table of Contents 
  * [Description](#Description)
  * [User Story](#UserStory)
  * [Project URL](#Project-URL)
  * [Deplyment](#Deployment)
  * [Mock-up](#Mock-up)
  * [Technologies](#Technologies)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  * [Features](#Features)
  * [Tests](#Tests)
  * [Resources](#Resources)
  * [Contact](#Contact)
  * [Designed and built by](#Designed-and-built-by)
  #
  
  ## Description 
  A React-based Google Books Search app with helper/util functions and React Hooks to query and display books based on user searches. It also uses Node, Express, MongoDB and is deployed to Heroku.

  ## UserStory 
  ```
  As a user, I want to be able to search for books, view details of a book on Google Books, and "Save" as well as 'Delete" a book.
  ```
  ## Acceptance Criteria
  ``` 
  * This application requires at minimum 2 pages, check out the following mockup images for each page:

    1. Start by using the [01-Ins_Mern/create-react-express](../01-Activities/01-Ins_Mern/create-react-express) example as a base for your application.

    2. Add code to connect to a MongoDB database named `googlebooks` using the mongoose npm package.

    3. Using mongoose, then create a Book schema.

    4. At a minimum, books should have each of the following fields:

    * `title` - Title of the book from the Google Books API

    * `authors` - The books's author(s) as returned from the Google Books API

    * `description` - The book's description as returned from the Google Books API

    * `image` - The Book's thumbnail image as returned from the Google Books API

    * `link` - The Book's information link as returned from the Google Books API
  ```
  ## Project URL
  https://github.com/johnsonr84/react-book-search

  ## Deployment
  https://mern-react-book.herokuapp.com/

  ## Mock-Up
  <table>
    <tr>
      <td>react-book-search example</td>
    </tr>
    <tr>
      <td><img src="react-book-search.png" height=400 alt="screenshot of react-book-search"></td>
    </tr>
  </table>

  ## Technologies 
  ```
  Reactjs node.js, Mongodb, Mongoose, Express js, React-Bootstrap, React-Router-Dom
  ```

  ## Installation 
   Access to GitHub.com and a code editor such as vscode is necessary. Click the GitHub link provided above to the APP REPO. Click on the green button that says Clone or Download and Choose how you would like to download: using the SSH/HTTPS keys or download the zip file. If using SSH/HTTPS Key: You will copy the link shown and open up either terminal (mac: pre-installed) or gitbash (pc: must be installed). Once the application is open, you will type git clone paste url here. If using Download ZIP: Click on Download Zip. Locate the file and double click it to unzip the file. Locate the unzipped folder and open it. 

  ## Usage 
  In order to use this APP, you need terminal (mac: pre-installed) or gitbash (pc: must be installed). You also need to download and install [node.js](https://nodejs.org/en/) and [npm](www.npmjs.com) or [yarn](https://yarnpkg.com/) package manager. Open the cloned REPO in your favorite code editor, and then in terminal, enter the command “npm i“ or “yarn add”  to install the dependencies. You will also need to signup for a free account at [mongodb.com](https://www.mongodb.com/). In addition, make sure to create a .env file on the project root, and input your own mongodb Atals config information (see .env_example for samples). You also need to obtain a Google Book API Key [link here](https://developers.google.com/books/docs/v1/getting_started) and replace process.env.REACT_APP_BOOK_API_KEY in src/Search/Search.js file with you own API KEY. Now you are ready to start using  the app by entering “npm start” on your terminal or gitbash. If you just want to try how the app works, you can go to the link [here](https://mern-react-book.herokuapp.com/)

  ## Credits 
  Me, myself and Irene 

  ## License 
  This project is [mit](https://choosealicense.com/licenses/mit/) licensed.

  ## Features
  Coming soon maybe 

  ## Tests
  npm test 

  ## Resources
  * [Choose a License](https://choosealicense.com/)
  * [Badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  * [shields.io](https://shields.io/)
  * [w3schools](https://www.w3schools.com/)
  * [stackoverflow.com](https://stackoverflow.com/)
  * [YouTube](https://www.youtube.com/)
  * [01-Ins_Mern/create-react-express](../01-Activities/01-Ins_Mern/create-react-express)
  * [`react-router-dom`](https://github.com/reactjs/react-router)
  * [Deployment Guide](./MongoDBDeploy.md)
  * [Heroku](https://www.heroku.com)


  ## Contact
  Email: robertcjohnson1984@gmail.com 

  ## Designed and built by
  Author(s): Rob Johnson  

  GitHub: https://github.com/johnsonr84/ 
