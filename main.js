//JavaScript Functionality Part 1 Goes Here. Comment it all out once finsihed.

//var section = document.getElementsByTagName('section')[0];

//var button = document.getElementsByTagName('button')[0];

//button.addEventListener('click', function slideToggle(){
	
	//section.classList.toggle('hide');
//});



//jQuery functionality will go here. Make sure to include the document.ready function.

$(document).ready(function(){
	$('button').click(function(){
		$('section').slideToggle();
	});
});