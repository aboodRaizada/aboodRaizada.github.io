$(document).ready(function(){
	
	//fixed nav
	
	$(window).scroll(function(){
		
		if ( $(window).scrollTop() >= 200 ){
		
			$('.upper-header').css('height','13vh');
			$('.upper-header .navbarr').css({
				'backgroundColor':'#fff',
				'height'        :'13vh'
			});
			$('.upper-header .logo').css({
				'backgroundColor':'#fff',
				'height'        :'13vh'
			});
			$('.upper-header .contact').css({
				'backgroundColor':'#fff',
				'height'        :'13vh'
			});
			$('.upper-header').addClass('fixed');
			$('header').css('paddingTop','34vh');
			$('.upper-header .logo img').attr('src','../images/mini-logo.png');
			$('.upper-header .logo').css('padding','2% 12% 0% 0%');
			$('.upper-header .navbarr').css('paddingTop','2%');
			$('header .upper-header .contact h3').css('marginTop','6%');
			
		} else {
			
			$('.upper-header').css('height','31vh');
			$('.upper-header .navbarr').css({
				'backgroundColor':'#fff0',
				'height'        :'31vh'
			});
			$('.upper-header .logo').css({
				'backgroundColor':'#fff0',
				'height'        :'31vh'
			});
			$('.upper-header .contact').css({
				'backgroundColor':'#fff0',
				'height'        :'31vh'
			});
			$('.upper-header').removeClass('fixed');
			$('header').css('paddingTop','0');
			$('.upper-header .logo img').attr('src','../images/logo.png');
			$('.upper-header .logo').css('padding','0 15px');
			$('.upper-header .navbarr').css('paddingTop','3%');
			$('header .upper-header .contact h3').css('marginTop','10%');
						
		}	
	});
	
	//top button
	
	$('footer button#top').click(function(){
		$('body').animate({
			scrollTop: 0
		}, 2000);
	});
	
});