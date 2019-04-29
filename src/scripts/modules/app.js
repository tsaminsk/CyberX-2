window.onload = function () {

    //все клубы селект
    $('.js-clubs-select').on('click', function() {
        
        $(this).toggleClass('is-open');
    }).find('.clubs__select-items p').on('click', function() {
        $('.js-clubs-select').find('span').text($(this).text())
    });
 
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

    if (document.querySelector('#map') != null) {
        ymaps.ready(init);
    }

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 9,
            controls: []
        }, {
            suppressMapOpenBlock: true,
            searchControlProvider: 'yandex#search'
        });
        var MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #000; font-weight: bold;">$[properties.iconContent]</div>'
        );
        var myPlacemark1 = new ymaps.Placemark([55.613112, 37.285735], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'г. Москва, ул. центральная 19',
            ballonContentFooter: 'Games club',
            hintContent: 'г. Москва, ул. центральная 19'

        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });
        var myPlacemark2 = new ymaps.Placemark([55.690278, 37.601879], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'г. Москва, Большая Черемушкинская,1',
            ballonContentFooter: 'Games club',
            hintContent: 'г. Москва, Большая Черемушкинская,1'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });
        var myPlacemark3 = new ymaps.Placemark([55.642199, 37.604520], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'г. Москва, Балаклавский проспект, 16 ',
            ballonContentFooter: 'Games club',
            hintContent: 'г. Москва, Балаклавский проспект, 16 '
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });
        var myPlacemark4 = new ymaps.Placemark([59.939095, 30.315868], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'г. Санкт-Петербург',
            ballonContentFooter: 'Games club',
            hintContent: 'г. Санкт-Петербург'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });
        var myPlacemark5 = new ymaps.Placemark([54.707390, 20.507307], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'г. Калининград',
            ballonContentFooter: 'Games club',
            hintContent: 'г. Калининград'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });
        var myPlacemark6 = new ymaps.Placemark([52.287054, 104.281047], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'г. Иркутск',
            ballonContentFooter: 'Games club',
            hintContent: 'г. Иркутск'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });
        var myPlacemark7 = new ymaps.Placemark([44.723912, 37.768974], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'г. Новороссийск',
            ballonContentFooter: 'Games club',
            hintContent: 'г. Новороссийск'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });
        var myPlacemark8 = new ymaps.Placemark([44.561141, 38.076809], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'г. Геленджик',
            ballonContentFooter: 'Games club',
            hintContent: 'г. Геленджик'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });
        var myPlacemark9 = new ymaps.Placemark([55.505546, 37.332097], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'п. Ватутинки Московской обл.',
            ballonContentFooter: 'Games club',
            hintContent: 'п. Ватутинки Московской обл.'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });
        var myPlacemark10 = new ymaps.Placemark([44.761141, 39.871140], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'г. Белореченск',
            ballonContentFooter: 'Games club',
            hintContent: 'г. Белореченск'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });
        var myPlacemark11 = new ymaps.Placemark([44.608865, 40.098548], {
            ballonContentHeader: 'CyberX',
            ballonContentBody: 'г. Майкоп',
            ballonContentFooter: 'Games club',
            hintContent: 'г. Майкоп'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/map-label.png',
            iconImageSize: [50, 65],
            iconImageOffset: [-25, -55],
            iconContentLayout: MyIconContentLayout
        });

        myMap.geoObjects
            .add(myPlacemark1)
            .add(myPlacemark2)
            .add(myPlacemark3)
            .add(myPlacemark4)
            .add(myPlacemark5)
            .add(myPlacemark6)
            .add(myPlacemark7)
            .add(myPlacemark8)
            .add(myPlacemark9)
            .add(myPlacemark10)
            .add(myPlacemark11);
    }
};