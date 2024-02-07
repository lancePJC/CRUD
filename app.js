const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/AlienDBex'; // Update the URL to include the correct hostname and port

const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); // Add useUnifiedTopology option

const con = mongoose.connection;

con.on('open', function() {
  console.log('connected...');
}); 

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(3000, () => {
  console.log('Server started on port 3000');
});