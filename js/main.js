
$(document).ready(function() {

  if (window.Swiper) {

    let info_swiper = new Swiper(".info__wrap", {
      slidesPerView: 1,
      preloadImages: false,
      lazy: true,
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".info__block .swiper-button-next",
        prevEl: ".info__block .swiper-button-prev",
      },
      allowTouchMove: true,
    });

    let reviews_swiper = new Swiper(".reviews__wrap", {
      slidesPerView: 3,
      spaceBetween: 24,
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: ".reviews__block .swiper-button-next",
        prevEl: ".reviews__block .swiper-button-prev",
      },
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
       breakpoints: {
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
          },
          1023: {
            slidesPerView: 3,
          }
        }
    });

    let product_swiper = new Swiper(".product__list", {
       slidesPerView: "auto",
      preloadImages: false,
      lazy: true,
      /*navigation: {
        nextEl: ".swiper-button-next.info__button.info__button--next",
        prevEl: ".swiper-button-prev.info__button.info__button--prev",
      },
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },*/
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

  }

  let elems = $('.reviews__text');
  elems.each(function( index, item ) {
    let heightItem = $(item).find('.reviews__block').height();
    const elem = $(item).parents('.reviews__item');
    const btnItem = elem.find('.reviews__more');
     if(heightItem>114) {
      btnItem.html(btnItem.data('show'));
      btnItem.addClass('reviews__more--active');
       $(item).addClass('reviews__text--gradient');
     }
  })

 $('.reviews__item').on('click', '.reviews__more', function(e) {
  let item = $(e.target).parents('.reviews__item');
  let btn = item.find('.reviews__more');
  let text = item.find('.reviews__text');
  let heightItem = item.find('.reviews__block').height();

  text.toggleClass('reviews__text--active reviews__text--gradient');
   
   if(text.hasClass('reviews__text--active')) {
    btn.html(btn.data('hide'));
    text.css( "height", heightItem );
   } else {
    btn.html(btn.data('show'));
    text.css( "height", "112px" );
   }

 })

      let iframeContainer = $('.map__wrap');
      let advancedOffset = 150;
      let iframeContainerOffsetTop = Math.round(iframeContainer.offset().top);
      let windowHeight = $(window).height();
      let iframeMap = $('.map__wrap').data('map');
      let iframeBlock = `<iframe src="${iframeMap}" style="border:0;" allowfullscreen=""></iframe>`;
    
      // При загрузке страницы делаем проверку, не находится ли наш div в поле видимости, если находится, то мы сразу в него вставляем iframe
      // Если этого не делать, и страница вдруг окажется маленькой по высоте где не будет скролла, то наш div останется без iframe
      if ($(window).scrollTop() >= (iframeContainerOffsetTop - windowHeight - advancedOffset)) {
        iframeContainer.html(iframeBlock);
      }

      $(window).scroll(function () {
        if ($(this).scrollTop() >= (iframeContainerOffsetTop - windowHeight - advancedOffset)) {
          // При прокрутке страницы делаем проверку на наличие iframe внутри div, если его нет, то добавляем в него iframe
          // Если не делать эту проверку, то при каждом скролле у нас в div будет обновляться iframe и по новой загружаться
          if (!iframeContainer.children('iframe').length) {
            iframeContainer.html(iframeBlock);
          }
        }
      });


  function menuShow(){
  $('.menu__list').each(function( index, item ) {
    let elem = $(item).find('li');
      elem.each(function( index, item ) {
        if(index>=4){
           if ($(window).width() < 1250) {
             $(item).hide();
             $(item).parents('.menu__row').find('.menu__more').addClass('menu__more--active');
           } else {
             $(item).show();
           }
        }
      })
  })
}

 menuShow();
  $(window).resize(function () {
    menuShow();
  })

  console.log($('source'));

  $(document).on('click', '.product__elem', function(e) {
    let elem = e.currentTarget;
    let indexElem = $(elem).data('index');
    let parent = $(elem).parents('.product__item');
    let block = parent.find('.product__elem');
    let image = parent.find('.product__image');
      console.log(image);

    block.each(function( index, item ) {
      $(item).removeClass('product__elem--active');
    });
    $(this).addClass('product__elem--active');

    image.each(function( index, item ) {
      $(item).removeClass('product__image--visible');
      image.eq(indexElem).addClass('product__image--visible');
    });
  })
/*
FOR GOOGLE MAP
*/

});

