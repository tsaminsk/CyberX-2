function setServicesSlider() {
    if ($(window).width() < 750) {
        let n = 0;
        $('.js-services-slider-left').off('click').on('click', function (event) {
            event.preventDefault();
            n > 0 ? n-- : n = 5;
            $('.js-services-slider').css('transform', `translate3d(-${n * 100 / 6}%, 0, 0)`);

        });

        $('.js-services-slider-right').off('click').on('click', function (event) {
            event.preventDefault();
            n < 5 ? n++ : n = 0;
            $('.js-services-slider').css('transform', `translate3d(-${n * 100 / 6}%, 0, 0)`);
        });
    } else {
        $('.js-services-slider').css('transform', `translate3d(0, 0, 0)`);
    }
}