const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require ('body-parser');
const methodOverride = require ('method-override');
const http = require ('http');
const socketIO = require('socket.io');
const tchatServer = require ("./web-socket-io/tchat-server.js");




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));




app.use(express.static('public'));
app.use( '/socketio', express.static('node_modules/socket.io-client/dist'));

app.set('views engine', 'pug');

const indexRouter = require(__dirname + '/routes/index-router.js');
const apiRouter = require(__dirname + '/routes/api-router.js');
const tchatRouter = require(__dirname + '/routes/tchat-router.js')

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/tchat', tchatRouter);

let io = socketIO ();



const server = http.createServer(app);

server.listen(port, function () {
    console.log("Lancement");
});

io.listen(server);
tchatServer(io);

