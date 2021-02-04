/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
        
    });


    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
		WOW JS
	--------------------*/
	new WOW().init();



})(jQuery);