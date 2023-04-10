function initMap() {
    // coordenadas do local que você deseja exibir no mapa
    var myLatLng = {lat: -23.5489, lng: -46.6388};
  
    // opções de exibição do mapa
    var mapOptions = {
      zoom: 12,
      center: myLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
    // cria o mapa dentro do elemento #map com as opções definidas acima
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // adiciona um marcador no local definido pelas coordenadas acima
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Meu local'
    });
  }
  
  // inicializa o mapa quando a página for carregada
  google.maps.event.addDomListener(window, 'load', initMap);
  