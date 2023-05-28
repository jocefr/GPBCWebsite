// [MASTER JAVASCRIPT]
//	Project     :	CHURCH BLOG Page
//	Version     :	1.0
//	Last Change : 	06/1/2017
//	Primary Use :   CHURCH BLOG HTML Page


$(document).on('ready', function() { 	
	"use strict"; //Start of Use Strict
	
	
	// SOCIAL ICON CHANGE FUNCTION
	
	$('.icon-change').on('mouseover mouseleave', function() {
    $(this).attr({
        src: $(this).attr('data-src') 
        , 'data-src': $(this).attr('src') 
    }) 
	});
	
	
	//IMAGE ZOOM ANIMATION FUNCTION
	$(".zoom-area").on("mouseover", function() {
		
		$(this).find(".find-image").addClass( "image-zoom" );
		
	});	
	$(".zoom-area").on("mouseleave", function() {	
		$(this).find(".find-image").removeClass( "image-zoom" );
	});
	
	return false;
	// End of use strict

});

