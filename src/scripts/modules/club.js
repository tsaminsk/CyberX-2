function setClubSlider() {
    if ($(window).width() < 1200) {
        let n = 0;
        $('.js-club-slider-left').off('click').on('click', function (event) {
            event.preventDefault();
            n > 0 ? n-- : n = 3;
            $('.js-club-slider').css('transform', `translate3d(-${n * 25}%, 0, 0)`);
        });

        $('.js-club-slider-right').off('click').on('click', function (event) {
            event.preventDefault();
            n < 3 ? n++ : n = 0;
            $('.js-club-slider').css('transform', `translate3d(-${n * 25}%, 0, 0)`);
        });
    } else {
        $('.js-club-slider').css('transform', `translate3d(0, 0, 0)`);
    }
}