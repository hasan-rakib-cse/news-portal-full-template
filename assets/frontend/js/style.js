/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */

jQuery(document).on('ready', function () {

	/* -------------------------------------
			COLLAPSE MENU SMALL DEVICES
	-------------------------------------- */
	function collapseMenu() {
		jQuery('.menu-item-has-children, .menu-item-has-mega-menu').prepend('<span class="tg-dropdowarrow "><i class="nw-down fa fa-angle-right"></i></span>');
		jQuery('.menu-item-has-children span, .menu-item-has-mega-menu span').on('click', function () {
			jQuery(this).next().next().slideToggle(300);
			jQuery(this).parent('.menu-item-has-children, .menu-item-has-mega-menu').toggleClass('tg-open');
		});
	}
	collapseMenu();

	// header-2 (@media (max-width: 767px)
	jQuery(".tg-header-2 .hide_show").on('click', function () {
		var x = document.getElementById("upper-new-header");
		if (x.style.opacity === "0" && x.style.height === "0px") {
			x.style.height = "100px";
			x.style.opacity = "1";

		} else {
			x.style.height = "0px";
			x.style.opacity = "0";
		}
	});


	/* -------------------------------------
			OPEN HEADER SEARCH
	-------------------------------------- */
	jQuery('.tg-search-1 #tg-btnsearch').on('click', function () {
		jQuery('.tg-searchbox form').animate({
			width: 'toggle'
		}, {
			duration: 1000
		});
	});

	/* -------------------------------------
			MAGA MENU
	-------------------------------------- */
	function hoverIn() {
		var a = jQuery(this);
		var nav = a.closest('#tg-navigation');
		var mega = a.find('.mega-menu');
		var offset = rightSide(nav) - leftSide(a);
		mega.width(Math.min(rightSide(nav), columns(mega) * 325));
		mega.css('left', Math.min(0, offset - mega.width()));
	}

	function hoverOut() {}

	function columns(mega) {
		var columns = 0;
		mega.children('.mega-menu-row').each(function () {
			columns = Math.max(columns, jQuery(this).children('.mega-menu-col').length);
		});
		return columns;
	}

	function leftSide(elem) {
		return elem.offset().left;
	}

	function rightSide(elem) {
		return elem.offset().left + elem.width();
	}
	jQuery('#tg-navigation .menu-item-has-mega-menu').hover(hoverIn, hoverOut);


	/* -------------------------------------
			LATEST NEWS SLIDER
	-------------------------------------- */
	var _tg_navtabslider = jQuery('.tg-navtabslider');
	_tg_navtabslider.owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="icon-arrow-left"></i>',
			'<i class="icon-arrow-right"></i>',
		],
		navClass: [
			'tg-btnsimpleprev tg-btnprev',
			'tg-btnsimplenext tg-btnnext'
		],
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			640: {
				items: 1,
				nav: true,
			},
			768: {
				items: 2,
				nav: true,
			},
			992: {
				items: 3,
				nav: true,
			},
			1200: {
				items: 4,
				nav: true,
			}
		}
	});

	/* -------------------------------------
			BLOG POST SLIDER
	-------------------------------------- */
	var _tg_postSlider = jQuery('.blog-post-carousel');
	_tg_postSlider.owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		margin: 20,
		responsiveClass: true,
		navText: [
			'<i class="fa-solid fa-angle-left"></i>',
			'<i class="fa-solid fa-angle-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			640: {
				items: 1,
				nav: true,
			},
			767: {
				items: 2,
				nav: true,
			},
			992: {
				items: 3,
				nav: true,
			},
			1200: {
				items: 3,
				nav: true,
			}
		}
	});

	/* -------------------------------------
			WORKER SLIDER
	-------------------------------------- */
	var _tg_workerSlider = jQuery('.worker-slider');
	_tg_workerSlider.owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		margin: 20,
		responsiveClass: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000, 
		smartSpeed: 250,
		navText: [
			'<i class="fa-solid fa-angle-left"></i>',
			'<i class="fa-solid fa-angle-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			640: {
				items: 1,
				nav: true,
			},
			767: {
				items: 2,
				nav: true,
			},
			991: {
				items: 3,
				nav: true,
			},
			1200: {
				items: 4,
				nav: true,
			}
		}
	});

	/* -------------------------------------
			BACK TO TOP BUTTON
	-------------------------------------- */
	(function($) {
		$(window).on("scroll", function(e) {
			if ($(this).scrollTop() > 0) {
				$('#back-to-top').fadeIn('slow');
			} else {
				$('#back-to-top').fadeOut('slow');
			}
		});
		$(document).on("click", "#back-to-top", function(e) {
			$("html, body").animate({
				scrollTop: 0
			}, 0);
			return false;
		});
	})(jQuery);

	/* -------------------------------------
			STICKY COLUMN
	-------------------------------------- */
	(function($) {
		$(document).ready(function() {
			$('#sticky-right-sidebar').theiaStickySidebar();
		});
	})(jQuery);

});



