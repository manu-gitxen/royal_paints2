const ClinicMasterCarousel = function () {
  const handleTestimonialSwiper1 = () => {
    const swiperEl = document.querySelector(".testimonial-swiper1");
    if (!swiperEl) return;

    new Swiper(".testimonial-swiper1", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper1-button-next",
        prevEl: ".swiper1-button-prev",
      },
    });
  };

  const handleTestimonialSwiper4 = () => {
    const swiperEl = document.querySelector(".testimonial-swiper4");
    if (!swiperEl) return;

    const testimonialThumbSwiper4 = new Swiper(".testimonial-thumb-swiper4", {
      slidesPerView: 1,
      effect: "fade",
      centeredSlides: true,
    });

    new Swiper(".testimonial-swiper4", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
      },
      thumbs: {
        swiper: testimonialThumbSwiper4,
      },
      navigation: {
        nextEl: ".swiper4-button-next",
        prevEl: ".swiper4-button-prev",
      },
    });
  };

  const handleTestimonialSwiper9 = () => {
    const sliderEl = document.querySelector(".testimonial-swiper9");

    if (sliderEl) {
      const testimonialSwiper9 = new Swiper(".testimonial-swiper9", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
        },
        centeredSlides: true,
        breakpoints: {
          1481: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2.5,
          },
          767: {
            slidesPerView: 2,
          },
        },
      });
    }
  };

  const handleClientSwiper2 = () => {
    const swiperEl = document.querySelector(".client-swiper2");
    if (!swiperEl) return;

    new Swiper(".client-swiper2", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        767: {
          slidesPerView: 4,
        },
        575: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        },
      },
    });
  };

  const BlogSlideshowSwiper = () => {
    const swiperEl = document.querySelector(".blog-slideshow");
    if (!swiperEl) return;

    new Swiper(".blog-slideshow", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: "auto",
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination-two",
        clickable: true,
      },
    });
  };

  if (
    document.querySelector(".galley-thumb-swiper") &&
    document.querySelector(".galley-swiper")
  ) {
    const swiperThumbs = new Swiper(".galley-thumb-swiper", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(".galley-swiper", {
      loop: true,
      spaceBetween: 10,
      thumbs: {
        swiper: swiperThumbs,
      },
    });
  }

  const handleTestimonialSwiper = function () {
    const wrapper = document.querySelector(".testimonial-swiper-wrapper");
    if (!wrapper) return;

    const testimonialThumbs = new Swiper(".testimonial-thumbs", {
      speed: 1500,
      parallax: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });

    new Swiper(".testimonial-swiper", {
      speed: 1500,
      parallax: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      thumbs: {
        swiper: testimonialThumbs,
      },
    });
  };

  const handleServiceSwiper = () => {
    const swiperEl = document.querySelector(".service-swiper");
    if (!swiperEl) return;

    new Swiper(".service-swiper", {
      speed: 1500,
      parallax: true,
      slidesPerView: 1,
      spaceBetween: 35,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        567: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
      },
    });
  };

  const handleTeamSwiper2 = () => {
    const imageEl = document.querySelector(".team-image-swiper");
    const contentEl = document.querySelector(".team-content-swiper");

    if (!imageEl || !contentEl) return;

    const imageSwiper = new Swiper(imageEl, {
      slidesPerView: 1.4,
      spaceBetween: 15,
      speed: 800,
      allowTouchMove: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      loopAdditionalSlides: 2,
      loopPreventsSliding: true,
      loop: true,
      breakpoints: {
        591: {
          slidesPerView: 1.9,
        },
        992: {
          slidesPerView: 2.05,
        },
      },
    });

    const contentSwiper = new Swiper(contentEl, {
      slidesPerView: 1,
      speed: 800,
      allowTouchMove: true,
      watchSlidesProgress: true,
      loop: true,
    });

    imageSwiper.controller.control = contentSwiper;
    contentSwiper.controller.control = imageSwiper;
  };

  const handleTeamSwiper3 = () => {
    const imageEl = document.querySelector(".team-image-swiper-2");
    const contentEl = document.querySelector(".team-content-swiper-2");

    if (!imageEl || !contentEl) return;

    const imageSwiper2 = new Swiper(imageEl, {
      slidesPerView: 1.4,
      spaceBetween: 15,
      speed: 800,
      allowTouchMove: true,
      watchSlidesProgress: true,
      loop: true,
      breakpoints: {
        591: {
          slidesPerView: 1.9,
        },
        992: {
          slidesPerView: 1.68,
        },
      },
    });

    const contentSwiper2 = new Swiper(contentEl, {
      slidesPerView: 1,
      speed: 800,
      allowTouchMove: true,
      watchSlidesProgress: true,
      loop: true,
    });

    imageSwiper2.controller.control = contentSwiper2;
    contentSwiper2.controller.control = imageSwiper2;
  };

  const handleTestimonialSwiper7 = function () {
    const swiperContainer = document.querySelector(".testimonial-swiper7");

    if (swiperContainer) {
      const testimonialSwiper7 = new Swiper(".testimonial-swiper7", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".testimonial-pagination-swiper7",
          clickable: true,
        },
      });
    }
  };

  const handleHeroBannerSwiper = () => {
    const sliderEl = document.querySelector(".hero-banner-swiper");

    if (sliderEl) {
      const slides = document.querySelectorAll(
        ".hero-banner-swiper .swiper-slide"
      );

      const isFileProtocol = window.location.protocol === "file:";
      let effect = null;

      if (isFileProtocol) {
        // Fallback for file:/// protocol where browser CORS blocks WebGL texture loading
        const effectContainer = document.querySelector(".hero-effect-container");
        if (effectContainer) effectContainer.style.display = "none";

        slides.forEach((slide) => {
          const imgUrl = slide.dataset.img1;
          if (imgUrl) {
            slide.style.backgroundImage = `url("${imgUrl}")`;
            slide.style.backgroundSize = "cover";
            slide.style.backgroundPosition = "center right";
            slide.style.backgroundRepeat = "no-repeat";
          }
        });
      } else {
        try {
          effect = new hoverEffect({
            parent: document.querySelector(".hero-effect-container"),
            intensity: 0.6,
            image1: slides[0].dataset.img1,
            image2: slides[0].dataset.img2,
            displacementImage: "images/1.jpg",
            speedIn: 0.7,
            speedOut: 0.7,
            hover: false,
          });

          // Preload all slide images into GPU cache for instant, zero-flicker glass transition
          const allImgs = Array.from(slides).map((s) => s.dataset.img1).filter(Boolean);
          if (effect && effect.preload) {
            effect.preload(allImgs);
          }
        } catch (e) {
          console.warn("WebGL hoverEffect fallback:", e);
        }
      }

      const thumbsSwiper = new Swiper(".hero-banner-swiper-thumbs", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          1481: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        },
      });

      const mainSwiper = new Swiper(".hero-banner-swiper", {
        effect: "fade",
        fadeEffect: { crossFade: true },
        navigation: {
          nextEl: ".hero-banner-button-next",
          prevEl: ".hero-banner-button-prev",
        },
        thumbs: { swiper: thumbsSwiper },
      });

      mainSwiper.on("slideChangeTransitionStart", () => {
        const i = mainSwiper.activeIndex;
        if (effect && slides[i]) {
          effect.forceTransition(slides[i].dataset.img1, slides[i].dataset.img1);
        }
      });

      const currentEl = document.querySelector(".hero-banner-slider__current");
      const totalEl = document.querySelector(".hero-banner-slider__total");

      const updatePagination = () => {
        const total = slides.length;
        const current = mainSwiper.realIndex + 1;

        currentEl.textContent = current < 10 ? `0${current}` : current;
        totalEl.textContent = total < 10 ? `0${total}` : total;
      };

      updatePagination();
      mainSwiper.on("slideChange", updatePagination);
    }
  };

  const handleServiceSwiper4 = function () {
    const swiperContainer = document.querySelector(".service-swiper-4");

    if (swiperContainer) {
      const ServiceSwiper = new Swiper(".service-swiper-4", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          1481: {
            slidesPerView: 3.7,
          },
          1200: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      });
    }
  };

  return {
    load() {
      handleTestimonialSwiper();
      handleTestimonialSwiper1();
      handleTestimonialSwiper4();
      handleTestimonialSwiper7();
      handleTestimonialSwiper9();
      handleClientSwiper2();
      BlogSlideshowSwiper();
      handleServiceSwiper();
      handleServiceSwiper4();
      handleTeamSwiper2();
      handleTeamSwiper3();
      handleHeroBannerSwiper();
    },
  };
};

window.addEventListener("load", function () {
  ClinicMasterCarousel().load();
});
