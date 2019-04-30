//все клубы селект
function setClubsSelect() {
    $('.js-clubs-select').on('click', function () {
        $(this).toggleClass('is-open').find('.clubs__select-items').slideToggle(250);
    }).find('.clubs__select-items p').on('click', function () {
        let city = $(this).text();
        if ($(this).data('coords')) {
            let coords = $(this).data('coords'); //[55.76, 37.64];
            myMap.panTo(
                // Координаты нового центра карты
                coords, {
                    flying: true
                }
            );
        }
        $('.js-clubs-select').find('span').text(city);
        $('.clubs__items-wrapp').find('.clubs__item').filter(function () {
            $(this).show();
            if ($(this).data('city') != city) {
                $(this).hide();
                return false;
            } else {
                return true
            };
        });
        setClubsItems();
    });
}

function setClubsItems() {
    currentClubsItem = 0;
    clubsItems = $('.clubs__items-wrapp').find('.clubs__item').filter(function () {
        return $(this).css("display") != "none"
    }).length;
    $('.clubs__items-wrapp').css('transform', 'translate3d(0, 0, 0)');

    //все клубы слайдер вниз-вверх
    if ($(window).width() >= 1200 && clubsItems > 3) {
        $('.clubs__items-arrow-bottom').show();

        $('.js-clubs-arrow-bottom').off('click').on('click', function () {
            if (!$(this).hasClass('mirror-h')) {
                if (clubsItems - currentClubsItem > 6) {
                    currentClubsItem += 3;
                } else if (clubsItems - currentClubsItem > 3 && clubsItems - currentClubsItem <= 5 || clubsItems - currentClubsItem < 3) {
                    currentClubsItem += clubsItems % 3;
                    currentClubsItem >= clubsItems - 3 ? $(this).addClass('mirror-h') : null;
                }
            } else {
                if (currentClubsItem >= 6) {
                    currentClubsItem -= clubsItems % 3;
                } else if (currentClubsItem > 3 && currentClubsItem <= 5) {
                    currentClubsItem = 3;
                } else {
                    currentClubsItem = 0;
                    $(this).removeClass('mirror-h');
                }
            }
            $('.clubs__items-wrapp').css('transform', 'translate3d(0, -' + (297 * currentClubsItem) + 'px, 0)');
        });
    } else {
        $('.clubs__items-arrow-bottom').hide();
    }

    //все клубы слайдер
    if ($(window).width() >= 750 && $(window).width() < 1200 && clubsItems > 2) {
        $('.js-clubs-arrow-right').show().addClass('is-active');
        $('.js-clubs-arrow-left').show().removeClass('is-active');

        $('.js-clubs-arrow-right').off('click').on('click', function (event) {
            event.preventDefault();
            if ($(this).hasClass('is-active')) {
                if ((clubsItems - currentClubsItem) === 3) {
                    currentClubsItem += 1;
                } else {
                    currentClubsItem += 2;
                }
                (clubsItems - currentClubsItem) === 2 ? $(this).removeClass('is-active') : null;
                $('.js-clubs-arrow-left').addClass('is-active');
                $('.clubs__items-wrapp').css('transform', 'translate3d(-' + (375 * currentClubsItem) + 'px, 0, 0)');
            } else {
                return false;
            }
        });

        $('.js-clubs-arrow-left').off('click').on('click', function (event) {
            event.preventDefault();
            if ($(this).hasClass('is-active')) {
                if ((clubsItems - currentClubsItem) === 2 && (clubsItems % 2) === 1) {
                    currentClubsItem -= 1;
                    $('.js-clubs-arrow-right').addClass('is-active');
                } else {
                    currentClubsItem -= 2;
                    $('.js-clubs-arrow-right').addClass('is-active');
                }
                currentClubsItem === 0 ? $(this).removeClass('is-active') : null;
                $('.clubs__items-wrapp').css('transform', 'translate3d(-' + (375 * currentClubsItem) + 'px, 0, 0)');
            } else {
                return false;
            }
        });
    } else if ($(window).width() >= 750 && $(window).width() < 1200 && clubsItems <= 2) {
        $('.js-clubs-arrow-right').hide();
        $('.js-clubs-arrow-left').hide();
    }

    if ($(window).width() < 750 && clubsItems >= 2) {
        $('.js-clubs-arrow-right').show().addClass('is-active');
        $('.js-clubs-arrow-left').show().removeClass('is-active');

        $('.js-clubs-arrow-right').off('click').on('click', function (event) {
            event.preventDefault();
            if ($(this).hasClass('is-active')) {
                currentClubsItem += 1;
                $('.js-clubs-arrow-left').addClass('is-active');
                (clubsItems - currentClubsItem) === 1 ? $(this).removeClass('is-active') : null;
                $('.clubs__items-wrapp').css('transform', 'translate3d(-' + (100 * currentClubsItem) + 'vw, 0, 0)');
            } else {
                return false;
            }
        });

        $('.js-clubs-arrow-left').off('click').on('click', function (event) {
            event.preventDefault();
            if ($(this).hasClass('is-active')) {
                currentClubsItem -= 1;
                $('.js-clubs-arrow-right').addClass('is-active');
                currentClubsItem === 0 ? $(this).removeClass('is-active') : null;
                $('.clubs__items-wrapp').css('transform', 'translate3d(-' + (100 * currentClubsItem) + 'vw, 0, 0)');                
            } else {
                return false;
            }
        });
    } else if ($(window).width() < 750 && clubsItems === 1) {
        $('.js-clubs-arrow-right').hide();
        $('.js-clubs-arrow-left').hide();
    }
}
