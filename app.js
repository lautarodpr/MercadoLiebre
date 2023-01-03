const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Servidor corriendo en https://localhost:' + port);
});
