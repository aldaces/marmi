$(document).ready(function(){
    //the trigger on hover when cursor directed to this class
      $(".core-menu li").hover(
      function(){
        //i used the parent ul to show submenu
          $(this).children('ul').slideDown('fast');
      }, 
        //when the cursor away 
      function () {
          $('ul', this).slideUp('fast');
      });
    //this feature only show on 600px device width
      $(".hamburger-menu").click(function(){
        $(".burger-1, .burger-2, .burger-3").toggleClass("open");
          $(".core-menu").slideToggle("fast");
      });
  });

$(document).ready(function ($) {
    var mySwiper1 = new Swiper('.slide-1', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-slide-1',
            prevEl: '.swiper-button-prev-slide-1'
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            
            992: {
                slidesPerView: 2
            },

            768: {
                slidesPerView: 2
            },

            480: {
                slidesPerView: 1
            }
        }
    })
});



$(document).ready(function ($) {
    var mySwiper2 = new Swiper('.slide-2', {
        slidesPerView: 2,
        navigation: {
            nextEl: '.swiper-button-next-slide-2',
            prevEl: '.swiper-button-prev-slide-2'
        },
        breakpoints: {

            768: {
                slidesPerView: 3
            },

            992: {
                slidesPerView: 4
            },
            
            1200: {
                slidesPerView: 6    
            }

        }
    })
});


$(document).ready(function ($) {
    var mySwiper3 = new Swiper('.slide-3', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next-req',
            prevEl: '.swiper-button-prev-req'
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetweenSlides: 30
            },

            992: {
                slidesPerView: 3,
                centeredSlides: true
            },

            768: {
                slidesPerView: 2
            }
        }
    })
});

