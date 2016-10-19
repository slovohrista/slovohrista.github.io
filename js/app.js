var $hamburger = $(".hamburger");

var slider = $('.slide').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    infinite: true,
    speed: 1200,
    fade: true,
    slide: 'div',
    nextArrow: '.next-chevron',
    prevArrow: '.prev-chevron',
    cssEase: 'linear'
});

$hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    $('.m-nav-wr').toggle(function() {
    }, function() {
    });
});

$( document ).ready(function() {
    $('.slide').css("visibility", "visible");
    $('.slick-slide p a').css("visibility", "visible");
    $('.author').css("visibility", "visible");
});
