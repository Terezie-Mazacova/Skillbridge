// == SLIDER ==
document.addEventListener('DOMContentLoaded', function () {
    const splides = document.querySelectorAll('.splide');

    splides.forEach(function (splideElement) {
        new Splide(splideElement, {
        perPage: 3,
        gap: '30px',
        pagination: false,
        arrows: true,
        type: 'loop',
        breakpoints: {
            1280: {
            perPage: 2,
            gap: '20px',
            },
            
            1023: {
            perPage: 1,
            },
        },
        }).mount();
    });
});