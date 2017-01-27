$(document).ready(function(){
	$(document).on('click','#nav-icon', function(){
		if(!$('#nav-icon').hasClass('open')){
			$('#nav-icon').addClass('open');
			$('.contain_all').addClass('open');
			$('footer').addClass('open');
            $('header').addClass('open');
		}else{
			$('#nav-icon').removeClass('open');
			$('.contain_all').removeClass('open');
            $('footer').removeClass('open');
			$('header').removeClass('open');
		}
		return false;
	});

	if($('.slide-partner').length > 0){
		var mySwiper = new Swiper('.slide-partner .swiper-container', {
			slidesPerView: 'auto',
			nextButton: '.slide-partner .swiper-button-next',
			prevButton: '.slide-partner .swiper-button-prev',
		    speed: 500,
		    spaceBetween: 60
		});  
	}

	if($('.wrap-slider-careers').length > 0){
        var swiper = new Swiper('.wrap-slider-careers .swiper-container', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            loop: true
        });
    }

    if($('.box-accordion').length > 0){
    	var tt = $('.box-accordion .tt-box');
    	$(document).on('click','.box-accordion .tt-box',function(){
    		var that = $(this);
    		$accordion = $(this).next();
    		tt.removeClass('active');
    		if ($accordion.is(':hidden') === true) {
    			$(".box-accordion .ctt-box").slideUp();
    			$accordion.slideDown();
    			that.addClass('active');
    		}else{
    			$accordion.slideUp();
    		}
    	});
    }

    if($('.js-datepicker').length > 0){
    	$('.js-datepicker').datepicker();
    	$(document).on('click','.form-group .ic', function(){
    		var prev = $(this).prev('.js-datepicker');
    		prev.focus();
    	});
    }


});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        navbarHeight = $('header').outerHeight();
        hasScrolled();
        didScroll = false;
    }
}, 250);



function hasScrolled() {
    var st = $(this).scrollTop();
    var h_banner = $('.banner-main').height();

    if(st > h_banner){
        $('header').addClass('white');
    }else{
        $('header').removeClass('white');
    }
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}