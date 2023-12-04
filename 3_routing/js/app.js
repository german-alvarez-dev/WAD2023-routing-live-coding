let myMap, originPosition

function init() {
    renderMap()
    getLocation()
    setEventListeners()
}

function setEventListeners() {
    document.querySelector('#calculateRoute').onclick = () => {
        const { value } = document.querySelector('#destinationInput')
        renderRoute(value)
    }
}

function renderRoute(destination) {

    const routeDetails = {
        destination: destination,
        origin: originPosition,
        travelMode: 'DRIVING'
    }

    const service = new google.maps.DirectionsService()

    service.route(
        routeDetails,
        routeResult => drawRoute(routeResult)
    )
}

function drawRoute(routeData) {
    const renderer = new google.maps.DirectionsRenderer()
    renderer.setDirections(routeData)
    renderer.setMap(myMap)
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

    originPosition = currentPosition

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