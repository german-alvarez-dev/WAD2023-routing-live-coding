let myMap

function init() {
    renderMap()
    getLocation()
}

function getLocation() {

    navigator.geolocation.getCurrentPosition(
        position => updateMapPosition(position),
        error => console.log('THIS IS AN ERROR', error)
    )
}

function updateMapPosition(position) {

    const { coords } = position

    const currentPosition = { lat: coords.latitude, lng: coords.longitude }

    myMap.setCenter(currentPosition)

    new google.maps.Marker({
        map: myMap,
        position: currentPosition
    })
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 15,
            center: {
                lat: 43.531926263648515,
                lng: -5.664077185084633
            },
            styles: mapStyles.retro
        }
    )
}