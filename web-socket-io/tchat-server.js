let allSockets;
module.exports = (io) => {
    io.on('connection', connection)
    allSockets = io;
};
function connection(socket) {
    console.log('Je suis connecté en tant que client');
    socket.on('tchatConnection', (data)=> {
        tchatConnection(data, socket)
    });
    socket.on('nouveau-message', newMsg);
}
function tchatConnection(data, socket) {
    tableauUtilisateur [socket.id] = data.usernamme;
    console.log(tableauUtilisateur);
    socket.emit('initTchat', {message: []});
}
function newMsg(datas) {
    allSockets.emit('broadcast', datas);
}
const tableauUtilisateur = [];

