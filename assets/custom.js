// <!-- ============================================================================= -->
// <!-- Ella Custom JS - Customize The Style For Layout -->
// <!-- ============================================================================= -->

// <!-- ============================================================================= -->
// <!-- IMPORTANT DISCLAIMER -->
// <!-- Please use only JS to style the layout. -->
// <!-- ============================================================================= -->

$('.section-header-utility, .section-header-navigation').wrapAll('<div class="custom-sticky-header"></div>');

// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.custom-sticky-header').outerHeight();
console.log("Nav Bar Height", navbarHeight);

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.custom-sticky-header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.custom-sticky-header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}