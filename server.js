const express = require("express");
const path = require("path");
const routes = require('./routes');
const mongoose = require ("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Routes
app.use(routes);

// Connects to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactbooksearch", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Starts API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
