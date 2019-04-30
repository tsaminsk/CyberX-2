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
