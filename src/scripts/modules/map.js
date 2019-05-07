function init(coords, clubs, mapParams) {
    let zoom = 9;
    let crd = coords;

    if (mapParams != undefined) {
        crd = mapParams.center;
        zoom = mapParams.zoom;
    }
    
    myMap = new ymaps.Map("map", {
        center: crd,
        zoom: zoom,
        controls: []
    }, {
        suppressMapOpenBlock: true,
        searchControlProvider: 'yandex#search'
    });

    // myMap.behaviors.disable('scrollZoom');
    setPlacemarcs(clubs);
}

function setPlacemarcs(clubs) {
    var MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #000; font-weight: bold;">$[properties.iconContent]</div>'
    );

    var iconTools = {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'assets/images/map-label.png',
        iconImageSize: [50, 65],
        iconImageOffset: [-25, -55],
        iconContentLayout: MyIconContentLayout
    };

    for (let i = 0; i < clubs.length; i++) {
        let myPlacemark = new ymaps.Placemark(clubs[i].coords, {
            ballonContentHeader: clubs[i].name,
            ballonContentBody: clubs[i].address,
            ballonContentFooter: clubs[i].descr,
            hintContent: clubs[i].address
        }, iconTools);

        myMap.geoObjects.add(myPlacemark)
    }
}