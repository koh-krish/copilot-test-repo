const express = require('express');
const app = express();
const port = 3000;

// Intentionally missing a middleware (e.g., body-parser) for testing PR review
// TODO: Add body-parser middleware

app.get('/', (req, res) => {
    res.send('Hello World!') // Intentionally missing semicolon
    // dev-mistake: forgot to handle errors here
});

// Intentionally using a wrong port variable name in listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // dev-mistake: PORT is not defined, should be 'port'
});

// dev-mistake: No error handling middleware
