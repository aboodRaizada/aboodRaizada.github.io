$(window).ready(function(){

    // ripple effect

    $('.right_header .iconss li , a , .notifi_icon').rippleria({

        // aniamtion speed
        duration: 750,

        // custom easing effect
        easing: 'linear',

        // custom color
        color: '#fff7',

        // enable automatically adding .rippleria-dark class to the dark elements (appeared with 1.3)
        detectBrightness: true

    });

     // fullScreen button

     $(".fullscreen").click(function () { 
        
        $('body').fullScreenHelper('toggle');
        
    });

     // sm butto button

     $(".new_header_sm_screen").click(function () { 
        
        $('.left_header').toggleClass('active');
        $('.sm_header').toggleClass('active');
        
    });

    // header dropdown toggle

    $(".left_header .drop_down_toggler").click(function () { 

        $(this).next().toggle(0);
        $(".notifi_list").hide(0);
        $(".user .dropdownn").hide(0);

    });
    
    // header notification toggle
    
    $(".notifi_icon").click(function () { 

        $(this).next().toggle(0);
        $(".drop_down_div").hide(0);
        $(".user .dropdownn").hide(0);

    });
    
    // header user toggle
    
    $(".user").click(function () { 

        $(this).find(".dropdownn").toggle(0);
        $(".drop_down_div").hide(0);
        $(".notifi_list").hide(0);

    });

    // sideNav toggle

    $(".nav_toggler").click(function () { 

        $(".side_nav").toggleClass("active");

    });

    // sideNav links dropdown

    $(".side_nav .links a").click(function () { 

        $(this).toggleClass("active");
        $(this).next().slideToggle(300);
        $(this).parent().siblings().find("a").removeClass("active");
        $(this).parent().siblings().find("ul").slideUp(300);

    });

    //timepicker

    $('.timepicker').mdtimepicker();

});