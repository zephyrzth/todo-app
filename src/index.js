// Inisialisasi express
const express = require('express');
const db = require('../db/db');
const bodyParser = require('body-parser');

// Setup express app
const app = express();

// Parse incoming req data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', (req, res) => {
    res.sendFile('C:\\xampp\\htdocs\\DiloDevCamp\\DiloDevelopersCamp\\todo-app\\src\\index.html');
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});