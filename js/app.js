$(document).ready(function() {
			$('.scrollTo').click( function() {
				var page = $(this).attr('href');
				var speed = 1200;
				$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
				return false;
			});
		});
