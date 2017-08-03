// Custom function to allow toggling two functions on one link
$.fn.clickToggle = function (func1, func2) {
    var funcs = [func1, func2];
    this.data('toggleclicked', 0);
    this.click(function () {
        var data = $(this).data();
        var tc = data.toggleclicked;
        $.proxy(funcs[tc], this)();
        data.toggleclicked = (tc + 1) % 2;
    });
    return this;
};

// Check if Side Nav is open
var sideNavOpen = false;

// Rotate Side Nav trigger button
function rotateAnimation(start, end) {
    var $elem = $('.trigger');
    $({ deg: start }).animate({ deg: end }, {
        duration: 50,
        step: function (now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}

// Open Side Nav
function openSideNav() {
    var vWidth = $(window).width();
    if (vWidth > 767) {
        $('.icon-sidebar-nav, .icon-sidebar-nav li').animate({ width: 272 }, 150, 'swing');
    } else {
        $('.icon-sidebar-nav, .icon-sidebar-nav li').animate({ width: 250, left: 0 }, 250, 'swing');
    }
    rotateAnimation(0, 90);
    sideNavOpen = true;
}

// Close Side Nav
function closeSideNav() {
    var vWidth = $(window).width();
    if (vWidth > 767) {
        $('.icon-sidebar-nav, .icon-sidebar-nav li').animate({ width: 57 }, 150, 'swing');
    } else {
        $('.icon-sidebar-nav, .icon-sidebar-nav li').animate({ width: 250, left: -250 }, 250, 'swing');
    }
    rotateAnimation(90, 0);
    sideNavOpen = false;
}

// Open/Close Side Nav on click
$('.nav-trigger').clickToggle(openSideNav, closeSideNav);

// Show Side Nav links on hover
$('.icon-sidebar-nav li').hover(
    function () {
        if (!sideNavOpen)
            $(this).stop().animate({ width: 272 }, 150, 'swing');
    }, function () {
        if (!sideNavOpen)
            $(this).stop().animate({ width: 57 }, 150, 'swing');
    }
);

$(window).resize(function () {
    var vWidth = $(window).width();
    if (vWidth > 767) {
        if (sideNavOpen) {
            $('.icon-sidebar-nav, .icon-sidebar-nav li').animate({ width: 272, left: 0 }, 250, 'swing');
        } else {
            $('.icon-sidebar-nav, .icon-sidebar-nav li').animate({ width: 57, left: 0 }, 250, 'swing');
        }
    } else {
        rotateAnimation(90, 0);
        if (sideNavOpen) {
            $('.icon-sidebar-nav, .icon-sidebar-nav li').animate({ width: 250, left: 0 }, 250, 'swing');
        } else {
            $('.icon-sidebar-nav, .icon-sidebar-nav li').animate({ width: 250, left: -250 }, 250, 'swing');
        }
    }
});