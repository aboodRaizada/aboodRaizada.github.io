$(document).ready(function(){

	// nav toggler

	$(".nav_button").click(function () { 

		$(this).toggleClass("active");
		$(".side_nav").toggleClass("active");
		$(".side_nav_closer").toggleClass("active");
		$("#fullpage").toggleClass("blured");
		
	});

	//nav closer

	$(".side_nav_closer").click(function (e) { 

		$(".nav_button").removeClass("active");
		$(".side_nav").removeClass("active");
		$(".side_nav_closer").removeClass("active");
		$("#fullpage").removeClass("blured");

	});

	// nav link direction

	$(".side_nav a").click(function () { 
		
		$(".nav_button").removeClass("active");
		$(".side_nav").removeClass("active");
		$(".side_nav_closer").removeClass("active");
		$("#fullpage").removeClass("blured");

	});

	// fullpage plugin
	
    var myFullpage = new fullpage('#fullpage', {

        // responsiveHeight: 330,
		responsiveWidth: 1070,
        slidesNavigation: true,
		css3: true,
		scrollBar: true,
		fitToSectionDelay: 300

        // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        // anchors:['firstPage', 'secondPage'],
        // navigationTooltips: ['firstSlide', 'secondSlide'],

    });

    //type effect
	
	var typed = new Typed(".typed", {
		
		strings: ["ux/ui designer.","quick learner.","creativty = success life.","colors lover"],
		typeSpeed:150,
		backSpeed:50,
		showCursor:false,
		loop:true

    });	
    
    //PieChart
	
	$('.chart').easyPieChart({
		
		size: 110,
		scaleLength: false,
		lineWidth: 6,
		trackColor: '#fff',
		barColor: '#18a2ff',
		lineCap: 'circle',
		animate: 2000
		
	});

	

	//remove paticles from sm devices

	if ( $(document).width() > 700 ) {
		
		particlesJS('particles-js',
		  
		  {
			"particles": {
			  "number": {
				"value": 9,
				"density": {
				  "enable": true,
				  "value_area": 800
				}
			  },
			  "color": {
				"value": "#ffffff"
			  },
			  "shape": {
				"type": "polygon",
				"stroke": {
				  "width": 0,
				  "color": "#000000"
				},
				"polygon": {
				  "nb_sides": 6
				},
				"image": {
				  "src": "img/github.svg",
				  "width": 100,
				  "height": 100
				}
			  },
			  "opacity": {
				"value": 0.1,
				"random": false,
				"anim": {
				  "enable": false,
				  "speed": 1,
				  "opacity_min": 0.1,
				  "sync": false
				}
			  },
			  "size": {
				"value": 80,
				"random": true,
				"anim": {
				  "enable": false,
				  "speed": 20,
				  "size_min": 0.1,
				  "sync": false
				}
			  },
			  "line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			  },
			  "move": {
				"enable": true,
				"speed": 1,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
				  "enable": false,
				  "rotateX": 600,
				  "rotateY": 1200
				}
			  }
			},
			"interactivity": {
			  "detect_on": "canvas",
			  "events": {
				"onhover": {
				  "enable": true,
				  "mode": "repulse"
				},
				"onclick": {
				  "enable": true,
				  "mode": "push"
				},
				"resize": true
			  },
			  "modes": {
				"grab": {
				  "distance": 400,
				  "line_linked": {
					"opacity": 1
				  }
				},
				"bubble": {
				  "distance": 400,
				  "size": 40,
				  "duration": 2,
				  "opacity": 8,
				  "speed": 3
				},
				"repulse": {
				  "distance": 200
				},
				"push": {
				  "particles_nb": 4
				},
				"remove": {
				  "particles_nb": 2
				}
			  }
			},
			"retina_detect": true,
			"config_demo": {
			  "hide_card": false,
			  "background_color": "#b61924",
			  "background_image": "",
			  "background_position": "50% 50%",
			  "background_repeat": "no-repeat",
			  "background_size": "cover"
			}
		  }
		
		);
		
	} else {
	
	}

});

window.onload = function(){

	//loader

	$(".loader_container").fadeIn(1000).fadeOut( 1000 , function(){

		$(this).remove();

	} );
	
};