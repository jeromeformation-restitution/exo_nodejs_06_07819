const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views engine', 'html');

const indexRouter = require(__dirname + '/routes/index-router.js');

app.use('/', indexRouter);
app.listen(port, function () {
    console.log("Lancement");
});