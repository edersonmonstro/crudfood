const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/Routes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

// server: mongodb+srv://ederson:mulderX1@mongodbmonster-qtuzu.gcp.mongodb.net/test?retryWrites=true&w=majority
// local : mongodb://localhost/noderest
mongoose.connect('mongodb://localhost/crudfood', {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.use(foodRouter);

app.listen(3000, () => { console.log('Server is running...') });