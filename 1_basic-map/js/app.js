function init() {

    const myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 15,
            center: {
                lat: 43.531926263648515,
                lng: -5.664077185084633
            },
            styles: mapStyles.yellowHumanMade
        }
    )

    new google.maps.Marker({
        map: myMap,
        position: {
            lat: 43.531926263648515,
            lng: -5.664077185084633
        }
    })
}