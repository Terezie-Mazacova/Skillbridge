// == HAMBURGER MENU ==
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
});


// == SLIDER - MAIN PAGE==
document.addEventListener( 'DOMContentLoaded', function() {
    var splide1 = new Splide('.slider1', {
        perPage: 5,
        pagination: false,
        arrows: false,
        type: 'loop',
        autoplay: true,
        interval: 1000,
        speed: 500000,
        breakpoints: {
            1280: {
                perPage: 4,
            },
            
            1023: {
                perPage: 3,
            },

            767: {
                perPage: 2,
            },

            480: {
                perPage: 1
            }
        },
    });
    splide1.mount();
} );


// == SLIDER SUBPAGE SIGN UP ==
document.addEventListener( 'DOMContentLoaded', function() {
    var splide2 = new Splide('.slider2', {
        type: 'loop',
        perPage: 1,
        gap: '10px',
        perMove: 1,
        arrows: true,
        pagination: false
    });
    splide2.mount();
} );


// == OUR PRICING SECTION ==
const jsTabs = document.querySelectorAll('.js-tabs')

jsTabs.forEach((jsTab) =>{
    const tabs = jsTab.querySelectorAll("[data-tab-target]");
    const tabContents = jsTab.querySelectorAll("[data-tab-content]");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        target.classList.add("active");
        });
    });
})

// == FAQ ==
/*
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle ('active')
    })
})
    */

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.closest('.faq-item').classList.toggle('active')
    })
})
