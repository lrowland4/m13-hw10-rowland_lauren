//JavaScript Functionality Part 1 Goes Here. Comment it all out once finsihed.

//var section = document.getElementByTagName('section');

//var button = document.getElementByTagName('button');

//document.getElementByTagName('button').addEventListener('click', function slideToggle(){
	//var section.document.getElementByTagName('section');
	//section.classList.toggle('hide');
//};



//jQuery functionality will go here. Make sure to include the document.ready function.

$(document).ready(function(){
	$('button').click(function(){
		$('section').slideToggle();
	});
});