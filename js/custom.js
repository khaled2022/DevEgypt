$(document).ready(function(){
    'use strict'

    // Button Scroll Top

    var scroll_btn = $('#scrollTop');
    $(window).scroll(function () {
        if ( $(this).scrollTop() > 100)
        {
           scroll_btn.fadeIn();
        }
        else
        {
           scroll_btn.fadeOut();
        }
    });
   scroll_btn.on('click', function(){
        $('html , body').animate ({scrollTop : 0} , 2500);
    });

    // Trigger Nice Scroll Plugin

    $('html').niceScroll( {
        cursorcolor:'#f7600e',
        cursorwidth : 10,
        cursorborderradius:0,
        cursorborder:'1px solid #f7600e'
    });

    // Chenge Header Height

    $('.header').height($(window).height());

    // Content Center

    function translate () 
    {
        var width = $(window).width(),
            height = $ (window).height(),
            w_div = $ ('.intro').width(),
            h_div = $ ('.intro').height();
        $('.intro').css({
            left: ( width / 2 ) -  ( w_div / 2 ) ,
            top: ( height / 2 ) - ( h_div / 2 )

        });
    }
    translate ();
    $(window).resize(function()
    {
        translate();
    });

     // Button Scroll To Our Team

     $('.header .ourTeam ').click(function () 
     {
         $('html, body').animate({
             scrollTop: $('.our-team').offset().top
         },2000);
     });
 

     // Button Scroll To Our Work

    $('.header .ourWork ').click(function () 
    {
        $('html, body').animate({
            scrollTop: $('.our-work').offset().top
        },1500);
    });


    // Scroll To Features

    $('.header .arrow i').click(function () 
    {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        },1000);
    });

    // Show hidden Items From Work

    $('.show-more').click(function () 
    {
        $('.our-work .hidden').fadeIn(1000);
    });

    // Check Testimonials

    var leftArrow  = $('.testim  .fa-chevron-left'),
        rightArrow = $('.testim  .fa-chevron-right');
    function checkClients() 
    {
        // Check leftArrow

        if ($('.client:first').hasClass('active')) 
        {
            leftArrow.fadeOut();
        } 
        else 
        {
            leftArrow.fadeIn();
        }
        // Check rightArrow

        if ($('.client:last').hasClass('active')) 
        {
            rightArrow.fadeOut();
        } 
        else 
        {
            rightArrow.fadeIn();
        }
    }
    checkClients();

    $('.testim i').click(function () 
    {
        // chevron-right
        if ($(this).hasClass('fa-chevron-right')) 
        {
            $('.testim .active').fadeOut(100, function () 
            {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
        // chevron-left
        else 
        {
            $('.testim .active').fadeOut(100, function () 
            {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });

   


});