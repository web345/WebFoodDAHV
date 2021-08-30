var swiper = new Swiper(".banner-main", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 8000,
        loop: true,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper1 = new Swiper(".category-list", {
    // slidesPerGroup: 1,
    autoplay: {
        delay: 8000,
        loop: true,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        414: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

var swiper2 = new Swiper(".seller-slider", {
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    autoplay: {
        delay: 8000,
        loop: true,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        414: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper3 = new Swiper(".brand-list", {
    // slidesPerGroup: 1,
    autoplay: {
        delay: 8000000,
        loop: true,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        414: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});