// Función de inicialización del mapa
function initMap() {
    var myLatLng = { lat: -31.41149657535465, lng: -64.19177410367823 }; // Reemplaza con tus propias coordenadas

    var mapOptions = {
        zoom: 15,
        center: myLatLng,
        styles: [
            // Estilos personalizados del mapa aquí
        ]
    };

    // Crea un nuevo mapa y colócalo en el contenedor
    var map = new google.maps.Map(document.getElementById('map-container'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Nuestra Ubicación'
    });
}

// Inicializa el mapa cuando se carga la página
google.maps.event.addDomListener(window, 'load', initMap);