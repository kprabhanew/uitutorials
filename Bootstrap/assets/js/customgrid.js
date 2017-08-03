// JavaScript Document
$(document).ready(function () {
    //Resize event of the page
    //$(window).resize(function () {})
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    $('.wn-width').text(viewportWidth);
    $('.wn-height').text(viewportHeight);
    
    $(window).on("resize", function (event) {
        viewportWidth = $(window).width();
        viewportHeight = $(window).height();
        $('.wn-width').text(viewportWidth);
        $('.wn-height').text(viewportHeight);
        if (viewportWidth < 768) {            
            blinkDiv('colxs');                
        }
        if (viewportWidth >= 768 && viewportWidth < 992) {            
            blinkDiv('colsm');           
        }
        
        if (viewportWidth >= 992 && viewportWidth < 1200) {            
            blinkDiv('colmd');       
        }
        if (viewportWidth >= 1200) {            
            blinkDiv('collg');               
        }
    });

    function blinkDiv(elementId) {
        $('.colorHighlight').removeClass('colorHighlight');
        $('.' + elementId).addClass('colorHighlight');        
    }
})