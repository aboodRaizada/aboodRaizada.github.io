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
			$('.upper-header .logo img').attr('src','images/mini-logo.png');
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
			$('.upper-header .logo img').attr('src','images/logo.png');
			$('.upper-header .logo').css('padding','0 15px');
			$('.upper-header .navbarr').css('paddingTop','3%');
			$('header .upper-header .contact h3').css('marginTop','10%');
						
		}	
	});
	
	//carousel slider
	
	$('.last-news .owl-carousel').owlCarousel({
		
		items 		: 2 ,
		margin		: 10 ,
		nav			: true,
		dots		: false,
		navText		: ['<i class="flaticon-chevron-sign-left"></i>','<i class="flaticon-chevron-sign-to-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
    	}
		
	});
	
	//خدمات الشركة
	
	$('.services-slider.owl-carousel').owlCarousel({
		items			: 2,
		margin			: 10,
		dots			: true,
		nav				: true,
		navText			: ['<i class="flaticon-left-arrow"></i>','<i class="flaticon-right-arrow"></i>'],
		autoplay		: true,
		autoplaySpeed	: 600,
		loop			: true,
		dotsEach		: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
    	}
	})

	//عملاء النجاح
	
	$('.cops-success .owl-carousel').owlCarousel({
		items			: 3,
		margin			: 35,
		autoplay		: true,
		autoplaySpeed	: 600,
		loop			: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
    	}
	})
	
	//top button
	
	$('footer button#top').click(function(){
		$('body').animate({
			scrollTop: 0
		}, 2000);
	});
	
});