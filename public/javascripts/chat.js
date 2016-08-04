$(function(){
	 var socket = io();
      $('.controller form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      });
      socket.on('chat message',function(msg){
      	console.log(msg);
      	$('#messages').append($('<li>').text(msg));
      });
});