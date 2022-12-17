import Swiper, {Navigation} from 'swiper';

const swiperButtons = document.querySelectorAll('[data-swiper-button]');
const swiperContainer = document.querySelectorAll('[data-swiper]');

const sliderTrainers = () => {
  if (!swiperContainer) {
    return;
  }

  const swiper = new Swiper('[data-swiper="trainers"]', {
    modules: [Navigation],

    direction: 'horizontal',

    watchOverflow: true,

    loop: true,

    keyboard: {
      enabled: true,
    },

    observer: true,

    grabCursor: true,

    navigation: {
      prevEl: '[data-swiper-button="trainers-prev"]',
      nextEl: '[data-swiper-button="trainers-next"]',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },
  });
  swiper.init();
  const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
  duplicates.forEach((el) => el.removeAttribute('tabindex'));
};

const sliderReviews = () => {
  if (!swiperContainer) {
    return;
  }

  const swiper = new Swiper('[data-swiper="reviews"]', {
    modules: [Navigation],
    direction: 'horizontal',
    slidesPerView: 1,
    watchOverflow: true,
    loop: false,
    autoHeight: true,

    navigation: {
      prevEl: '[data-swiper-button="reviews-prev"]',
      nextEl: '[data-swiper-button="reviews-next"]',
    },
  });
  swiper.init();
};

/* new Swiper('[data-swiper]', {
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
      80: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
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
  });*/


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

const removeNotJs = () => {
  if (!swiperButtons || !swiperContainer) {
    return;
  }
  swiperButtons.forEach((el) => el.classList.remove('is-not-js'));
  swiperContainer.forEach((el) => el.classList.remove('is-not-js'));
};

export {sliderTrainers, sliderReviews, removeNotJs};
