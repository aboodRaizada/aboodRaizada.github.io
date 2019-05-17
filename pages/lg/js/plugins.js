$(document).ready(function(){

	//countDown Clock
	
	$('#example').countdown({

		date: '10/15/2020 23:59:59'
		
	}, function () {
		
		alert('Congratolations!');
		
	});
	
	//credit card
	
	$('.id button').click(function(){
	
		$('.credit').css('height','240px')		
		
	});
	
	//open the form
	
	$('.details button').click(function(){
		
		$('.form').css({
			
			'width': '100vw',
			'height': '100vh',
			'opacity': '1'
			
		});
		
	});	
	
	//close the form
	
	$('i.glyphicon-remove').click(function(){
		
		$('.form').css({
			
			'width': '0',
			'height': '0',
			'opacity': '0'
			
		});
		
	});	
	
	
		
	$('.form').click(function(){
		
		$(this).css({
			
			'width': '0',
			'height': '0',
			'opacity': '0'
			
		});
		
	});
	
	
	$('.form .hor').click(function(e){
	
		e.stopPropagation();
	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});