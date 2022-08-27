const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    direction: 'horizontal',
    loop: false,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});