// (function($) {

// 	"use strict";

	

// 	function stop_videos() {
// 		var video = document.getElementById("video");
// 		if (video.paused !== true && video.ended !== true) {
// 			video.pause();
// 		}
// 		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
// 	}

// 	$(document).ready(function() {

		

// 		$('.slideshow nav span').on('click', function () {
// 			stop_videos();
// 		});

		

// 		$(".revealator-delay1").addClass('no-transform');

		

// 		if ($('.grid').length) {
// 			new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
// 		}

		
// 		$(".grid figure").on('click', function() {
// 			$("#navbar-collapse-toggle").addClass('hide-header');
// 		});

		

// 		$(".nav-close").on('click', function() {
// 			$("#navbar-collapse-toggle").removeClass('hide-header');
// 		});
// 		$(".nav-prev").on('click', function() {
// 			if ($('.slideshow ul li:first-child').hasClass('current')) {
// 				$("#navbar-collapse-toggle").removeClass('hide-header');
// 			}
// 		});
// 		$(".nav-next").on('click', function() {
// 			if ($('.slideshow ul li:last-child').hasClass('current')) {
// 				$("#navbar-collapse-toggle").removeClass('hide-header');
// 			}
// 		});

		

// 		var item = $(".grid li figure");
// 		var elementsLength = item.length;
// 		for (var i = 0; i < elementsLength; i++) {
// 			$(item[i]).hoverdir();
// 		}

		

// 		$(".contactform").on("submit", function() {
// 			$(".output_message").text("Sending...");

// 			var form = $(this);
// 			$.ajax({
// 				url: form.attr("action"),
// 				method: form.attr("method"),
// 				data: form.serialize(),
// 				success: function(result) {
// 					if (result == "success") {
// 						$(".form-inputs").css("display", "none");
// 						$(".box p").css("display", "none");
// 						$(".contactform").find(".output_message").addClass("success");
// 						$(".output_message").text("Message Sent!");
// 					} else {
// 						$(".tabs-container").css("height", "440px");

// 						$(".contactform").find(".output_message").addClass("error");
// 						$(".output_message").text("Error Sending!");
// 					}
// 				}
// 			});

// 			return false;
// 		});

// 	});

// 	$(document).keyup(function(e) {

		
// 		if (e.keyCode === 27) {
// 			stop_videos();
// 			$('.close-content').click();
// 			$("#navbar-collapse-toggle").removeClass('hide-header');
// 		}
// 		if ((e.keyCode === 37) || (e.keyCode === 39)) {
// 			stop_videos();
// 		}
// 	});


// })(jQuery);
