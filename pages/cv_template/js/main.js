$(document).ready(function(){
	
	//bounce effect
	
	$('a.bounce').click(function(){
		
		$(this).removeClass('bounce')
		
	});
	
	//mobile button
	
	$('.mobile_button').click(function(){
	
		$(this).toggleClass('active');	
		$('.mobile_nav').toggleClass('active');	
		
	});
	
	//type effect
	
	var typed = new Typed(".typed", {
		
		strings: ["front-end developer.", "ux/ui designer."],
		typeSpeed:150,
		backSpeed:50,
		showCursor:false,
		loop:true

	});	
	

	//slick
	
	$('.testimonials .items').slick({
		
		centerMode: true,
  		centerPadding: '0px',
  		slidesToShow: 3,
		arrows:	true,
		prevArrow: '.testimonials .arrows i.flaticon-chevron-pointing-to-the-left',
		nextArrow: '.testimonials .arrows i.flaticon-right-chevron',
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 3000,
  		responsive: [
    	{
			breakpoint: 768,
			settings: {
        		arrows: false,
				centerMode: true,
        		centerPadding: '0px',
				slidesToShow: 3
			}
    	},
    	{
			breakpoint: 588,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			}
		}
		]
		
	});
	
	//PieChart
	
	$('.chart').easyPieChart({
		
		size: 110,
		barColor: '#1894ff',
		scaleLength: false,
		lineWidth: 5,
		trackColor: '#2c3e50',
		lineCap: 'circle',
		animate: 2000
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});