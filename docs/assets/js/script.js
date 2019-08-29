
$(document).ready(function () {
    if ($(window).width() < 1201) {
        $('.header').addClass('header--mobile');
    }

    $(window).resize(function() {
        if ($(window).width() < 1201) {
            $('.header').addClass('header--mobile');
        }
        else if ($(window).width() > 1201) {
            $('.header').removeClass('header--mobile');
        };

    });




    $('.pageOne-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });

    $('.pageOne__offer-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        mobileFirst: true,
        responsive: [{
            breakpoint: 992,
            settings: 'unslick'
        }]
    });

    $("#navicon").click(function () {
        $(this).toggleClass('active');
        $('.pageOne__nav ul').toggleClass('active');
        $('.nav__dark').toggleClass('active');

    });

    $("#navigator-icons").click(function () {
        $(this).toggleClass('active');
    });





});


new Pageable("#container2", {
    animation: 500,
    orientation: "vertical",
    pips: true,
    onStart: function () {
        $('.header').addClass('header--mobile')
    },

    // many more
});

new Pageable("#container1", {
    childSelector: "[data-anchor]", // CSS3 selector string for the pages
    anchors: [], // define the page anchors
    pips: true, // display the pips
    animation: 300, // the duration in ms of the scroll animation
    delay: 0, // the delay in ms before the scroll animation starts
    throttle: 50, // the interval in ms that the resize callback is fired
    orientation: "vertical", // or horizontal
    swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
    freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to next page
    navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
    navNextEl: false, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
    infinite: false, // enable infinite scrolling (from 0.4.0)
    slideshow: { // enable slideshow that cycles through your pages automatically (from 0.4.0)
        interval: 3000, // time in ms between page change,
        delay: 0 // delay in ms after the interval has ended and before changing page
    },
    events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: true, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
        keydown: true, // enable / disable keyboard navigation
    },
    easing: function (currentTime, startPos, endPos, interval) {
        // the easing function used for the scroll animation
        return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
    },
    onInit: function () {
        // do something when the instance is ready
    },
    onUpdate: function () {
        // do something when the instance updates
    },
    onBeforeStart: function () {
        // do something before scrolling begins
    },
    onStart: function () {
        // do something when scrolling begins
    },
    onScroll: function () {
        // do something during scroll
    },
    onFinish: function () {
        // do something when scrolling ends
    },
});