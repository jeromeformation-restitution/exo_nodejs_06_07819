console.log('test');

let socket = io();
var username;
$('#tchatConnection').on('submit', tchatConnection);
$('#tchat').hide();
function tchatConnection(event) {
    event.preventDefault();
    username = $('#username').val();
    socket.emit("tchatConnection", {username: username});
    socket.on('initTchat', initTchat);
}
function sendMessage(){
    let message = $('.write_msg').val();
    socket.emit('nouveau-message', {
        username:username,
        message:message
    });
}
function initTchat () {
    $('#tchatConnection').fadeOut();
    $('#tchat').fadeIn();
    $('.msg_send_btn').on('click', sendMessage);
    socket.on('broadcast', newMsg);
}
function newMsg(datas){

    let html = `
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                    <span class="time_date"> ${datas.username}</span>
                  <p>${datas.message}</p>
                 </div>
              </div>
            </div>
    `;
    $('.msg_history').append(html);
}