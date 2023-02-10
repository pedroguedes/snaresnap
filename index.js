// Import the express package
const express = require('express');

// Create an express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to my Express app!');
});

// Define a route for handling user inputs
app.post('/input', (req, res) => {
  // Access the user input from the request body
  const input = req.body;

  // Process the user input here

  // Send a response to the client
  res.send({ message: 'Input received' });
});

// Start the express application on a specific port
app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});
