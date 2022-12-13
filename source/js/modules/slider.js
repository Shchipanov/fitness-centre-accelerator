import Swiper, {Navigation} from 'swiper';


const sliderTrainers = () =>
  new Swiper('[data-swiper]', {
    modules: [Navigation],

    loop: true,

    observer: true,

    slidesPerView: 4,

    slidesPerGroup: 1,

    loopFillGroupWithBlank: true,

    autoHeight: true,

    grabCursor: true,

    keyboard: {
      enabled: true,
    },

    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      notificationClass: 'swiper-notification',
    },

    navigation: {
      prevEl: '.slider-control__button-prev',
      nextEl: '.slider-control__button-next',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });


/* const sliderFeedback = () => {
  const swiperFeedback = new Swiper('.swiper-feedback', {
    modules: [Navigation],
    observer: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    infinite: false,
    loop: true,
    navigation: {
      nextEl: '.reviews__button-next--feedback',
      prevEl: '.reviews__button-prev--feedback',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 40,
      },
    },
  });
  // swiperFeedback.on('slideChange', function () {
  //   swiperFeedback.el.children[0].style.height = '';
  // });
};*/

export {sliderTrainers};
