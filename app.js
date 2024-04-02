const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, './public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Index Page',
        name: 'Your Name'
    });
});

app.get('/history', (req, res) => {
    res.render('themeone', {
        title: 'History Page',
        name: 'Your Name'
    });
});

app.get('/timing', (req, res) => {
    res.render('themetwo', {
        title: 'Timing Page',
        name: 'Your Name'
    });
});

app.get('/how-to-reach', (req, res) => {
    res.render('themethree', {
        title: 'How to Reach Page',
        name: 'Your Name'
    });
});

app.get('/gallery', (req, res) => {
    res.render('themefour', {
        title: 'Gallery Page',
        name: 'Your Name'
    });
});

app.listen(7000, () => {
    console.log("Server is up on http://localhost:7000");
});