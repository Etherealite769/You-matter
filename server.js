const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🌟 Mental Health Awareness app running at http://localhost:${PORT}`);
    console.log(`💚 You always matter!`);
});
