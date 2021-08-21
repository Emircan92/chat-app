const path = require('path');
const express = require('express');
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

const app = express();
const port = process.env.PORT || 3000;

// app.set('view engine', 'hbs');
// app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})