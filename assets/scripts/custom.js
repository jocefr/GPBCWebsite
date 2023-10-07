// [MASTER JAVASCRIPT]
//	Project     :	CHURCH Page
//	Version     :	1.0
//	Last Change : 	06/1/2017
//	Primary Use :   CHURCH HTML Page


$(document).on('ready', function() {	
	"use strict"; //Start of Use Strict
		
	//CONTACT FORM VALIDATION	
		if ($('#contact-form').length) {
			$('#contact-form').each(function(){
				$(this).validate({			
					errorClass: 'error',
					submitHandler: function(form){
						$.ajax({
							type: "POST",
							url:"mail/mail.php",
							data: $(form).serialize(),
							success: function(data) {							
							   if(data){
								   $('#sucessMessage').html('Mail Sent Successfully !!!');
								   $('#sucessMessage').show();
								   $('#sucessMessage').delay(3000).fadeOut();
							   }
							   else {
									$('#failMessage').html(data);
									$('#failMessage').show();
									$('#failMessage').delay(3000).fadeOut();
									}
							},
							error: function(XMLHttpRequest, textStatus, errorThrown) {
							   $('#failMessage').html('Error occurred');
							   $('#failMessage').show();
							   $('#failMessage').delay(3000).fadeOut();
							 }
						});
					}				
				});
			});
		}
	
	// YOUTUBE BACKGROUND VIDEO FUNCTION	
		var player=$('.player');
		if(player.length) {
			player.mb_YTPlayer();					
		}
		
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
	
	
	//POPUP FORM
		 $(document).ready(function () {

			$('#fadeandscale').popup({
				pagecontainer: '.container',
				transition: 'all 0.3s'
			});

		});

		//Get URL parameter
		var getUrlParameter = function getUrlParameter(sParam) {
			var sPageURL = decodeURIComponent(window.location.search.substring(1)),
				sURLVariables = sPageURL.split('&'),
				sParameterName,
				i;
			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=');

				if (sParameterName[0] === sParam) {
					return sParameterName[1] === undefined ? true : sParameterName[1];
				}
			}
		};
		
		//POPUP MSG BOX
		var cancel = getUrlParameter('cancel');
		var success = getUrlParameter('success');	
		if (cancel=='true') {
			$('#fade').fadeIn();
			$('#cancel_btn').fadeIn();	
		}
		else if (success=='true') {
			$('#fade').fadeIn();
			$('#success_btn').fadeIn();	
		}
		$('.close').on('click', function() {		
			$('#fade').fadeOut();
			$('#cancel_btn').fadeOut();
			$('#success_btn').fadeOut();
		});
		
		$('#donate-btn').on('click', function() {	
			
			var amt = $('#amounts').val();
			if(amt == ""){
				$('#amounts').prop('required',true);
			}else{
				return true;
			}			
		});
		
		
		
	
		//SELECT BOX VALUE POPULATE IN TEXT BOX
		var selected_val = $("select[name=amount] option:selected").val();	
		if(selected_val != 0){
			$("#amounts").val(selected_val);
		}
		else{				
			$("#amounts").val('').attr('placeholder', 'Amount'); 
		}		
		$('#price-1').on('change', function() {
			var select_optn = $(this).val();	
			  if(select_optn != 0){
					$("#amounts").val(select_optn);				
			  }else{
				$("#amounts").val('').attr('placeholder', 'Amount');
				$("#amounts").attr('placeholder', 'Amount');
			  }
		})
		
	//SELECT BOX DISABLED AND ENABLED
		$('#amounts').on('input', function() { 
			var key_input = $(this).val();
			if(key_input=='') {
				$('#price-1').prop('disabled',false);			
			}			
			else {
				$('#price-1').prop('disabled',true );			
			}
		});	
		
		
		
		//AMOUNT VALIDATION
		$("#amounts").on('keydown',function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				 // Allow: Ctrl+A, Command+A
				(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
				 // Allow: home, end, left, right, down, up
				(e.keyCode >= 35 && e.keyCode <= 40)) {
					 // let it happen, don't do anything
					 return;
			}
			// Ensure that it is a number and stop the keypress
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
		});
		
			// validate signup form on keyup and submit
		$("#popup-form").validate({
		});
	
		return false;
		// End of use strict
});

