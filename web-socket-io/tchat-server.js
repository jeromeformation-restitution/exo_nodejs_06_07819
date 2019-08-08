module.exports = (io) => {
    io.on('connection', connection)
};

function connection(socket) {
    console.log('Je suis connecté en tant que client');

    socket.on('tchatConnection', (data)=> {
        tchatConnection(data, socket)
    });
}


function tchatConnection(data, socket) {
    tableauUtilisateur [socket.id] = data.usernamme;
    console.log(tableauUtilisateur);

    socket.emit('initTchat', {message: []});
}

const tableauUtilisateur = [];

