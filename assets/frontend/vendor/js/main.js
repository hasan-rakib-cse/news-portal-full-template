/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */

jQuery(document).on('ready', function () {

	/* -------------------------------------
			COLLAPSE MENU SMALL DEVICES
	-------------------------------------- */
	function collapseMenu() {
		jQuery('.menu-item-has-children, .menu-item-has-mega-menu').prepend('<span class="tg-dropdowarrow"><i class="fa fa-angle-right"></i></span>');
		jQuery('.menu-item-has-children span, .menu-item-has-mega-menu span').on('click', function () {
			jQuery(this).next().next().slideToggle(300);
			jQuery(this).parent('.menu-item-has-children, .menu-item-has-mega-menu').toggleClass('tg-open');
		});
	}
	collapseMenu();

	/* -------------------------------------
			CHANGE LANGUAGES DATA
	-------------------------------------- */
	/*jQuery('.tg-languageslist').on("click", "li", function () {
		var currentHTML = this.innerHTML;
		jQuery('#tg-languages').empty();
		jQuery('#tg-languages').append(currentHTML);
	});*/

	$("#tg-languages").click(function () {
		var d = $(".list-items").css("display");
		if (d === "none") {
			$(".list-items").css("display", "block");
		} else {
			$(".list-items").css("display", "none");
		}

	});
	/* -------------------------------------
			OPEN HEADER SEARCH
	-------------------------------------- */
	jQuery('#tg-btnsearch').on('click', function () {
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
				items: 2,
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



});