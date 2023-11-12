jQuery(document).on('ready', function () {

	/* -------------------------------------
			ACHIEVEMENT COUNTER
	-------------------------------------- */

	(function($) {
		$(document).ready(function() {
			$('.achievement-counter .counter').counterUp({
				delay: 10,
				time: 1000
			});
		});
	})(jQuery);

});



