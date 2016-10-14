var $hamburger = $(".hamburger");



$hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
    $('.m-nav-wr').toggle(function() {
        /* Stuff to do every *odd* time the element is clicked */
    }, function() {
        /* Stuff to do every *even* time the element is clicked */
    });
});

$("a.stone-icon").hover(function functionName() {
    $(this).find(".shadow").toggleClass("shadow-shrink")

});

// $(document).ready(function() {
//     $('.books-slider').slick({
//         $('.your-element').on('swipe', function(event, slick, direction) {
//             console.log(direction);
//             // left
//         });
//     });
//
//     $(window).scroll(function () {
//       //if you hard code, then use console
//       //.log to determine when you want the
//       //nav bar to stick.
//       console.log($(window).scrollTop())
//     if ($(window).scrollTop() > 50) {
//       $("nav").addClass('navbar-colored');
//       $("nav").removeClass('navbar-transparent');
//       console.log('navbar-colored');
//     }
//     if ($(window).scrollTop() < 50) {
//       $("nav").removeClass('navbar-colored');
//       $("nav").addClass('navbar-transparent');
//       console.log('just navbar');
//     }
//   });
// });

// // Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('.navbar-colored').outerHeight();
//
// $(window).scroll(function(event){
//     didScroll = true;
// });
//
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);
//
// function hasScrolled() {
//     var st = $(this).scrollTop();
//
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
//
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('.navbar-colored').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('.navbar-colored').removeClass('nav-up').addClass('nav-down');
//         }
//     }
//
//     lastScrollTop = st;
// }
