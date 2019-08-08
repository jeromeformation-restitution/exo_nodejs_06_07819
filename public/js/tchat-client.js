console.log('test');

let socket = io();

$('#tchatConnection').on('submit', tchatConnection);

$('#tchat').hide();
function tchatConnection(event) {
    event.preventDefault();
    var usernamme = $('#username').val();

    socket.emit("tchatConnection", {usernamme: usernamme});
    socket.on('initTchat', initTchat);
    
}

function initTchat () {
    $('#tchatConnection').fadeOut();
    $('#tchat').fadeIn();

}
