$(document).ready(function () {
    $('.slider-weather').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        easing: 'linear',
        useCSS: true,
        responsive: [
            {
                breakpoint: 1285,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});