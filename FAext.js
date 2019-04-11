var listing = '';
var datelist = '';
var descriptionlist = '';
var userlist = '';
var locationlist = '';
var LostModal = '';
var Category1Button = '';


$(document).ready(function(){

$("#Home").on('click', function(){
	location.href="index.main.html";
});

$("#Login").on('click', function(){
	location.href="logintest.html";
});

$('.dropdown-item').on('click', function(){
	var textshow = $(this).text();
	$('#Category1Button').text( textshow);

});

var 
$('#lostitembox')
//$('.dropdown-toggle').dropdown()





/*



$("#SubmitSignup").on('click', alert());

$(".close").alert('close')	


*/

})