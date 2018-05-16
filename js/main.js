;(function($) {
	"use strict";
	var accordion = $('.ba-main');

	accordion.on('click', 'ba-tab', function (event) {
		var clikedContent = $(this).next('ba-body');
		accordion.find('ba-body').not(clikedContent).slideUp();
		clikedContent.slideToggle();
	});


})(jQuery);
