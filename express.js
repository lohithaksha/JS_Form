const express = require('express');
const app = express();
const path = require('path');
const myData = require('./data.js'); // Import your data.js file

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to fetch cards data
app.get('/api/cards', (req, res) => {
    res.json(myData.data);
});

// Endpoint to handle button click and redirect to the dog API URL
app.get('/api/button-click', (req, res) => {
    res.redirect('https://kinduff.github.io/dog-api/');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
