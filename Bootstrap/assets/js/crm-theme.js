/*** COMMON SCRIPTS FOR ALL ***/
/*****************************/


$('.btn-filter').click(function () {
    if ($('.filterBox').css('display') === 'none') {
        $(this).find('i').removeClass();
        $(this).find('i').addClass("icon-up");
    } else {
        $(this).find('i').removeClass();
        $(this).find('i').addClass("icon-down");
    }
    $(".filterBox").slideToggle("slow", function () {

    });
});

$('.btn-fltr-clearAll').click(function () {
    myFilterBox = $(this).parent().parent().parent();
    $(myFilterBox).find('input[type=checkbox]').each(function () {
        // some staff
        this.checked = false;
    });
});

$('.btn-fltr-selectAll').click(function () {
    myFilterBox = $(this).parent().parent().parent();
    $(myFilterBox).find('input[type=checkbox]').each(function () {
        // some staff
        this.checked = true;
    });
});
/*** Menu Toggle Script ***/
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
})

/*** Expandable Toggle Script ***/
// initialize tab-trigger expandable
$('#exandableTrigger').click(function () {
    var $t = $('#expandableDetailsContainer');
    if ($t.is(':visible')) {
        $t.slideUp();
        $(this).find('.icon-down').css('transform', 'rotate(0deg)');
        $(this).find('.icon-down').css('top', '3px');
    } else {
        $t.slideDown();
        $(this).find('.icon-down').css('transform', 'rotate(180deg)');
        $(this).find('.icon-down').css('top', '6px');
    }
});
// initialize plus/minus expandable
$('#exandableTrigger2 ').click(function () {
    var $t = $('#expandableDetailsContainer2');
    if ($t.is(':visible')) {
        $t.slideUp();
        $(this).find('i').attr('class', 'icon-plus');
    } else {
        $t.slideDown();
        $(this).find('i').attr('class', 'icon-minus');
    }
});


//close tooltip focus on mouseMove
$('*').on("mouseout", function () { // on lose focus
    $('.tooltip').tooltip('hide');
});