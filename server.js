const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
var cors = require('cors')
var app = express()

app.use(cors())

const PORT = process.env.PORT || 3030;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const apiRoutes = require('./routes/api_routes');


apiRoutes(app);


app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`App running on PORT http://localhost:${PORT}`);
});
