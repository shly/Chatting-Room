$(function(){
	var socket = io();
	$(".controller form").submit(function(){
		socket.emit("chat message",$("#m").val());
		$('#m').val('');
		return false;
	});
});