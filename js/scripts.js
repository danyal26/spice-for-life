$(function(){
    "use strict";

    navUiChange();


    // -------------------- NAVIGATION BUTTON CLICK (SMALLER DEVICES) -------------------
    $(".navbar-toggler").on("click", function(){
        let theWindow = $(window).scrollTop();
        let navIsOpen = $(".navbar-collapse").hasClass("show");

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
    $(".products-link").on("click", function(){
        // $(".nav-item").removeClass("active");
        $(".products-nav").addClass("active");
    });
    $(".about-link").on("click", function(){
        // $(".nav-item").removeClass("active");
        $(".about-nav").addClass("active");
    });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    // --------------------------- NAVIGATION CHANGE FUNCTION ---------------------------
    function navUiChange(){
        let theWindow = $(window).scrollTop();
        let navIsOpen = $(".navbar-collapse").hasClass("show");

        // NAVIGATION FURTHER DOWN - SMALL, BLUE
        if(theWindow >= 120){
            $(".navbar").addClass("navbar-scroll");
            $(".logo").addClass("logo-small");

            // CHANGE ACTIVE CLASSES TO WHITE AND REMOVE BORDER-BOTTOM
            if ($("#home-nav").hasClass("active") ){
                $(".nav-item").removeClass("active");
                $(".home-link").addClass("active-white");
            }
            if ($("#products-nav").hasClass("active") ){
                $(".nav-item").removeClass("active");
                $(".home-link").addClass("active-white");
            }
            if ($("#about-nav").hasClass("active") ){
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
            $(".products-link").removeClass("active-white");
            $(".about-link").removeClass("active-white");
            $(".home-link").addClass("active-white");
        }

        if((theWindow) >= $('#products').position().top){
            $(".home-link").removeClass("active-white");
            $(".about-link").removeClass("active-white");
            $(".products-link").addClass("active-white");
        }

        if((theWindow) >= $('#about').position().top){
            $(".home-link").removeClass("active-white");
            $(".products-link").removeClass("active-white");
            $(".about-link").addClass("active-white");
        }
    }

});