const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views engine', 'html');

const indexRouter = require(__dirname + '/routes/index-router.js');
const apiRouter = require(__dirname + '/routes/api-router.js');

app.use('/', indexRouter);
app.use('/', apiRouter);

app.listen(port, function () {
    console.log("Lancement");
});