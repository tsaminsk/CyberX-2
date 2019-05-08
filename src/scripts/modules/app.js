var myMap;
var coords = [55.76, 37.64];
var currentClubsItem;
var clubsItems;

window.onload = function () {

    // все страницы
    $('.js-mob-menu-open').on('click', function (event) {
        event.preventDefault();
        $('.js-mob-menu').fadeIn(500);
    });

    $('.js-mob-menu-close').on('click', function (event) {
        event.preventDefault();
        $('.js-mob-menu').fadeOut(500);
    });

    $('.js-popup-open').on('click', function (event) {
        event.preventDefault();
        $('.js-popup').fadeIn(500);
    });

    $('.js-popup-close').on('click', function (event) {
        event.preventDefault();
        $('.js-popup').fadeOut(500);
    });

    $('.phone_mask ').mask("+7(999) 999-99-99");

    if ($('.js-requisites')) {
        $('.js-requisites-open').on('click', function (event) {
            event.preventDefault();
            $('.js-requisites').fadeToggle(500);
        });
        $('.js-requisites-close').on('click', function (event) {
            event.preventDefault();
            $('.js-requisites').fadeOut(500);
        });
    }

    if (document.querySelector('#map') != null) {
        let clubs = Array.from($('#map').data('params'));
        let mapParams = $('#map').data('mapparams');
        ymaps.ready(init(coords, clubs, mapParams));
    }

    // главная
    if (document.querySelector('.about') != null) {
        setSliderAbout('.js-formats-slider');
        setSliderAbout('.js-preferens-slider');
        setSliderAbout('.js-photos-slider');

        $(window).resize(function () {
            setSliderAbout('.js-formats-slider');
            setSliderAbout('.js-preferens-slider');
        });
    }

    if (document.querySelector('.services') != null) {
        setServicesSlider();

        $(window).resize(function () {
            setServicesSlider();
        });
    }

    setNumbersAnimaition(".about__numbers", 4, "#js-num");

    //страница клубов
    if ($(document).find('.clubs')) {
        setClubsSelect();
        setClubsItems();

        $(window).resize(function () {
            setClubsSelect();
            setClubsItems();
        });
    }

    // слайдер главной страницы и страницы клуба
    if ($(document).find('.js-slider')) {
        const sliderImg = $('.js-slider').find('.slider__img');
        const arrPagination = $('.js-slider-pagination').find('.pagination-item');
        let n = 0;

        setInterval(() => {
            n < 3 ? n++ : n = 0;
            sliderImg.css('transform', `translate3d(-${n * 25}%, 0, 0)`);
            changePagination(n);
        }, 7000);

        $('.js-slider-left').on('click', function (event) {
            event.preventDefault();
            n > 0 ? n-- : n = 3;
            sliderImg.css('transform', `translate3d(-${n * 25}%, 0, 0)`);
            changePagination(n);
        });
        
        $('.js-slider-right').on('click', function (event) {
            event.preventDefault();
            n < 3 ? n++ : n = 0;
            sliderImg.css('transform', `translate3d(-${n * 25}%, 0, 0)`);
            changePagination(n);
        });

        for (let i = 0; i < arrPagination.length; i++) {
            $(arrPagination[i]).on('click', function (event) {
                event.preventDefault();
                sliderImg.css('transform', `translate3d(-${i * 25}%, 0, 0)`);
                changePagination(i);
            });
        }

        function changePagination(n) {
            for (let i = 0; i < arrPagination.length; i++) {
                if ($(arrPagination[i]).hasClass('is-active')) {
                    $(arrPagination[i]).removeClass('is-active');
                }
            }
            $(arrPagination[n]).addClass('is-active');
        }
    }

    // страница клуба
    setNumbersAnimaition(".club__gadgets", 3, "#js-club-num");

    // блок новости 
    $('.js-news-items').find('a.news__item-more').on('click', function(event) {
        event.preventDefault();
        
        if ($(this).parents('.news__item').hasClass('is-open')) {
            $(this).text('Подробнее');
        }
        else {
            $('.news__item').each(function (index, elem) {
                if ($(elem).hasClass('is-open')) {
                    $(elem).removeClass('is-open').find('a.news__item-more').text('Подробнее');
                }
            });
            $(this).text('Скрыть');
        }
        $(this).parents('.news__item').toggleClass('is-open');
    });
}