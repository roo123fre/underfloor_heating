new Swiper('.hero__slider', {
    slidesPerView: 2,
    spaceBetween:10,
    loop:true,
    navigation: {
        prevEl: 'hero__slider-btn_prev',
        nextEl:'hero__slider-btn_next',
    },
    autoplay:{
        delay: 3000,
    },
    breakpoints:{
        320:{
            slidesPerView:1,
        },
        560:{
            spaceBetween:8,
        }
    }
})