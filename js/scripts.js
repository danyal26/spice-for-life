$(function(){
    "use strict";

    navUiChange();

    var form = $('#contact-form');

    // -------------------------------- FORM SUBMIT EVENT --------------------------------
    $(form).submit(function(evt){        
        evt.preventDefault();
        var formData = $(form).serialize();

        var isValid = checkValidity();
        
        if (isValid){

            $.ajax({
                type: "POST",
                url: $(form).attr('action'),
                data: formData
            }).done(function(response) {
                $('#contactModal').modal('show');
            
                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#phone').val('');
                $('#message').val('');
            }).fail(function(data) {
        
                // Set the message text.
                if (data.responseText !== '') {
                    alert(data.responseText);
                } else {
                    alert('Oops! An error occured and your message could not be sent.');
                }
            });
        }

    });

    // -------------------- NAVIGATION BUTTON CLICK (SMALLER DEVICES) -------------------
    $(".navbar-toggler").on("click", function(){
        var theWindow = $(window).scrollTop();
        var navIsOpen = $(".navbar-collapse").hasClass("show");

        if (theWindow <= 120){
            
            // If the navbar is open (blue), remove blue
            if (navIsOpen){
                $(".navbar").removeClass("navbar-scroll");
            } else {
                $(".navbar").addClass("navbar-scroll");
            }

        }        
    });

    // -------------------------------- WINDOW SCROLL -----------------------------------
	$(window).on("scroll",function(){
        navUiChange();
    });

    // ----------------------------- NAVIGATION CLICK EVENTS ----------------------------


    $(".home-link").on("click", function(){
        // $(".nav-item").removeClass("active");
        $(".home-nav").addClass("active");
    });
    $(".skills-link").on("click", function(){
        // $(".nav-item").removeClass("active");
        $(".skills-nav").addClass("active");
    });
    $(".contact-link").on("click", function(){
        // $(".nav-item").removeClass("active");
        $(".contact-nav").addClass("active");
    });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    // --------------------------- NAVIGATION CHANGE FUNCTION ---------------------------
    function navUiChange(){
        var theWindow = $(window).scrollTop();
        var navIsOpen = $(".navbar-collapse").hasClass("show");

        // NAVIGATION FURTHER DOWN - SMALL, BLUE
        if(theWindow >= 120){
            $(".navbar").addClass("navbar-scroll");
            $(".logo").addClass("logo-small");

            // CHANGE ACTIVE CLASSES TO WHITE AND REMOVE BORDER-BOTTOM
            if ($("#home-nav").hasClass("active") ){
                $(".nav-item").removeClass("active");
                $(".home-link").addClass("active-white");
            }
            if ($("#skills-nav").hasClass("active") ){
                $(".nav-item").removeClass("active");
                $(".home-link").addClass("active-white");
            }
            if ($("#contact-nav").hasClass("active") ){
                $(".nav-item").removeClass("active");
                $(".home-link").addClass("active-white");
            }

        // NAVIGATION AT TOP OF PAGE
        } else {
            
            // If navbar is open (blue), leave blue
            if (!navIsOpen){
                $(".navbar").removeClass("navbar-scroll");
                $(".logo").removeClass("logo-small");
            }
            

            if ($("#home-link").hasClass("active-white") ){
                $(".nav-item").removeClass("active-white");
                $(".home-nav").addClass("active");
            }

        }

        if((theWindow) >= $('#intro').position().top){
            $(".contact-link").removeClass("active-white");
            $(".skills-link").removeClass("active-white");
            $(".home-link").addClass("active-white");
        }

        if((theWindow) >= $('#skills').position().top){
            $(".home-link").removeClass("active-white");
            $(".contact-link").removeClass("active-white");
            $(".skills-link").addClass("active-white");
        }

        if((theWindow) >= $('#contact').position().top){
            $(".home-link").removeClass("active-white");
            $(".skills-link").removeClass("active-white");
            $(".contact-link").addClass("active-white");
        }
    }

    // ------------------------------- VALIDATION FUNCTION -------------------------------
    function checkValidity(){

        var contName = $('#name').val();
        var contEmail = $('#email').val();
        var contMessage = $('#message').val();
        var error = $('#errorMessages');

        var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        

        if (contName == '' || contName.length < 2){
            error.removeClass('invisible');
            error.addClass('visible');
            error.html('Your name should have at least 2 characters.');
            return false;
        }
        else {
            error.removeClass('visible');
            error.addClass('invisible');
        }

        if (reg.test(contEmail)){
            error.removeClass('visible');
            error.addClass('invisible');
        }
        else {
            error.removeClass('invisible');
            error.addClass('visible');
            error.html('Your email address is not valid.');
            return false;
        }

        if (contMessage == '' || contMessage.length < 2){
            error.removeClass('invisible');
            error.addClass('visible');
            error.html('Your message should have at least 2 characters.');
            return false;
        }
        else {
            error.removeClass('visible');
            error.addClass('invisible');
        }

        return true;

    }

});