function setSliderAbout(name) {
    if (name == '.js-photos-slider' || $(window).width() < 1200 && name != '.js-photos-slider') {
        let n = 0;
        let max = $(name).find('> div').length;
        $(name).css('width', `${max * 100}%`);
        $(name).find('> div').css('width', `${100 / max}%`);
        $(name + '-left').off('click').on('click', function (event) {
            event.preventDefault();
            n > 0 ? n-- : n = max - 1;
            $(name).css('transform', `translate3d(-${n * 100 / max}%, 0, 0)`);
        });

        $(name + '-right').off('click').on('click', function (event) {
            event.preventDefault();
            n < max - 1 ? n++ : n = 0;
            $(name).css('transform', `translate3d(-${n * 100 / max}%, 0, 0)`);
        });

    } else if (name != '.js-photos-slider') {
        $(name).css('width', '1320px');
        $(name).find('> div').css('width', '390px');
    }
}