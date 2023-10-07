// [MASTER JAVASCRIPT]
//	Project     :	CHURCH Page
//	Version     :	1.0
//	Last Change : 	06/1/2017
//	Primary Use :   CHURCH HTML Page


$(document).on('ready', function() {	
	"use strict"; //Start of Use Strict
	var menu_bar= $('.navbar-default');
	var menu_li= $('.navbar-default li a');
	var menu_li_1=$(".navbar-nav li a");
	var menu_hover= $('.navbar-default li a:hover');
	var collapse= $('.navbar-collapse');
	
	//After Scroll Menu Created, Menu Bgcolor and Text Color
    var x = $("#top-nav").offset().top
	if (x > 50) {
        menu_bar.fadeIn().css({"background-color": "#ffffff", "color": "#666666", "box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"});
		menu_li.css({"color": "#666666"});			
    }
	else {
		menu_bar.css({"background-color": "transparent", "color": "#ffffff", "box-shadow": "none", "display": "none" });
				
	}	
	
	$(document).on('scroll',function() {	
		var y = $(this).scrollTop();   
		if (y > 50) {
			menu_bar.fadeIn().css({"background-color": "#ffffff", "color": "#666666", "box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"});
			menu_li.css({"color": "#666666"});		
			
		}
		else {
			menu_bar.css({"background-color": "transparent", "color": "#ffffff", "box-shadow": "none", "display": "none"});
			menu_li.css({"color": "#666666"});
		}
	});
	
	// Header Menu click Function
	$('ul.nav a[href^="#"]').on('click' ,function(event){					
		
		var toggle = $(".navbar-toggle").is(":visible");
		if (toggle) {
		  $(".navbar-collapse").collapse('hide');
		}
		$('html, body').animate({			
			scrollTop: $( $.attr(this, 'href') ).offset().top -60
		}, 2000);
		return false;
					
		event.preventDefault();				
	});	
	
	//MENU BAR SMOOTH SCROLLING FUNCTION		
		$( "#menu-list" ).on( "click", ".pagescroll", function( event ) {					
				event.preventDefault();	
				var hash_tag= $(this).attr('href');
				$('html, body').animate({
				scrollTop: $(hash_tag).offset().top - 50
			}, 2000);	
			return false;
		});	
	
		return false;
		// End of use strict
});

