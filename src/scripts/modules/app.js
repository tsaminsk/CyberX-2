var myMap;
var coords = [55.76, 37.64];
var currentClubsItem;
var clubsItems;

window.onload = function () {
    if (document.querySelector('#map') != null) {
        ymaps.ready(init(coords));
    }

    if ($(document).find('.clubs')) {

        $(window).resize(function () {
            setClubsSelect();
            setClubsItems();
        });
        setClubsSelect();
        setClubsItems();
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
            n < 3 ? n++ : n = 0;
            sliderImg.css('transform', `translate3d(-${n * 25}%, 0, 0)`);
            changePagination(n);
        });

        $('.js-slider-right').on('click', function (event) {
            event.preventDefault();
            n > 0 ? n-- : n = 3;
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

    // блок новости 
    // let newsItems = $('.js-news-items').find('.news__item');
    // for (let i = 0; i < newsItems.length; i++) {
    //     let $title = $(newsItems[i]).find('.news__item-text');
    //     let $text = $($title).text();

    //     while ($title.height() > 140) {
    //         $title.text($title.text().split(" ").slice(0, $title.text().split(" ").length - 1).join(" ") + "...");
    //     }

    //     let $shortText = $title.text();

    //     $(newsItems[i]).find('a.news__item-more').on('click', function (event) {
    //         event.preventDefault();

    //         if ($(this).parents('.news__item').hasClass('is-open')) {
    //             $(this).text('Подробнее');
    //             $(this).parents('.news__item').find('.news__item-text').text($shortText);
    //         }
    //         else {
    //             $(this).text('Скрыть');
    //             $(this).parents('.news__item').find('.news__item-text').text($text);
    //         }
    //         $(this).parents('.news__item').toggleClass('is-open');
    //     });
    // }

    // $('.js-news-items').find('.news__item').each(function() {
    //     let item = {};
    //     let $title = $(this).find('.news__item-text');
    //     item.text = $($title).text();

    //     while ($title.height() > $(this).height()) {
    //         $title.text($title.text().split(" ").slice(0, $title.text().split(" ").length - 1).join(" ") + "...");
    //     }
    //     item.title = $($title).text();
    // })

    $('.js-news-items').find('a.news__item-more').on('click', function(event) {
        event.preventDefault();
        
        if ($(this).parents('.news__item').hasClass('is-open')) {
            $(this).text('Подробнее');
        }
        else {
            $(this).text('Скрыть');
        }
        $(this).parents('.news__item').toggleClass('is-open');
        
    });
};
