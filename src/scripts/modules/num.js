function setNumbersAnimaition(blockName, items, idItem) {
    if (document.querySelector(blockName) != null) {
        let target_block = $(blockName);
        let blockStatus = true;
        $(window).scroll(function () {
            var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
            if (scrollEvent && blockStatus) {
                blockStatus = false;
                for (let i = 1; i <= items; i++) {
                    let num = $(idItem + i).text();

                    $({
                        numberValue: 0
                    }).animate({
                        numberValue: num
                    }, {
                        duration: 2000,
                        easing: "linear",
                        step: function (val) {
                            $(idItem + i).html(Math.ceil(val));
                        }
                    });
                }
            }
        });
    }
}