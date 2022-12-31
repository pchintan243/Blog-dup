const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

// Pug specific stuff

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Endpoints
app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});


app.get("/about", (req, res) => {
    res.send("This is my about page of blog web.");
});

app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
});