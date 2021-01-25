$(document).ready(function () {
    //the trigger on hover when cursor directed to this class
    $(".core-menu li").hover(
        function () {
            //i used the parent ul to show submenu
            $(this).children('ul').slideDown('fast');
        },
        //when the cursor away 
        function () {
            $('ul', this).slideUp('fast');
        });
    //this feature only show on 600px device width
    $(".hamburger-menu").click(function () {
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

$(document).ready(function ($) {
    var swiper4 = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next-prod',
          prevEl: '.swiper-button-prev-prod',
        },
      });
});


$(document).ready(function ($) {
    var $grid = $('.stone-product-list').isotope({
        itemSelector: '.stone-product-item',
        masonry: {
            columnWidth: 100,
            fitWidth: true
        }
    });
    // filter functions
    var filterFns = {
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    // bind filter button click
    $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
});

$(document).ready(function () {
    $(function () {

        //BEGIN
        $(".js-faq-title").on("click", function (e) {

            e.preventDefault();
            var $this = $(this);

            if (!$this.hasClass("faq__active")) {
                $(".js-faq-content").slideUp(800);
                $(".js-faq-title").removeClass("faq__active");
                $('.js-faq-rotate').removeClass('faq__rotate');
            }

            $this.toggleClass("faq__active");
            $this.next().slideToggle();
            $('.js-faq-rotate', this).toggleClass('faq__rotate');
        });
        //END

    });
});