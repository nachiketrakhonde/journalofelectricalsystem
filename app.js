const express = require('express');
const path = require('path');

const app = express();

// Set up the view engine to use EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Views folder path

// Route to render index.ejs when a request is sent to "/"
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to EJS!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
