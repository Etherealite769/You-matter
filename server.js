const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'static')));

// Set view engine for templates
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Route for home page
app.get('/', (req, res) => {
    res.render('index.html');
});

// Start server
app.listen(PORT, () => {
    console.log(`🌟 Mental Health Awareness app running at http://localhost:${PORT}`);
    console.log(`💚 You always matter!`);
});
