$('.serviceToggle').on('click', function (e) {
    e.preventDefault();

    if ($(window).width() > 992) {
        $(this).parent().toggleClass('open');
    }
});

// close when clicking outside
$(document).on('click', function (e) {
    if (!$(e.target).closest('.has-dropdown').length) {
        $('.has-dropdown').removeClass('open');
    }
});



$('.menu-toggle').on('click', function () {
    $('.main-nav').addClass('active');
});

$('.closeMenu').on('click', function () {
    $('.main-nav').removeClass('active');
});

$('.serviceToggle').on('click', function(e){
    if($(window).width() <= 991){
        e.preventDefault();
        $(this).parent().toggleClass('open');
    }
});