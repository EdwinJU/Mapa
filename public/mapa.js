/*var map = L.map( 'map', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
   }.setView([51.505, -0.09], 13)
   );
*/
   var map = L.map('map').setView([9.92500, -84.08333], 7);

   L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
   subdomains: ['a','b','c']
   }).addTo( map );

   /*for ( var i=0; i < markers.length; ++i ) 
   {
    L.marker( [markers[i].lat, markers[i].lng] )
    .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
    .addTo( map );
  }
*/
   //var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

   var myIcon = L.icon({
   iconUrl: 'Images/CocinasComunales.svg',
   iconRetinaUrl: 'Images/CocinasComunales.svg',
   iconSize: [29, 24],
   iconAnchor: [9, 21],
   popupAnchor: [0, -14]
   });
   for ( var i=0; i < cocina.length; ++i ) 
   {
     L.marker( [cocina[i].lat, cocina[i].lng], {icon: myIcon} )
     .bindPopup( '<a href="' + cocina[i].url + '" target="_blank">' + cocina[i].name + '</a>' + '<h2>Probando</h2>' +
      '<p>Aquí usamos en openOnlugar de addToporque maneja el cierre automático de una ventana emergente previamente abierta al abrir una nueva que es buena para la usabilidad.</p>'+
      '<p><img src="CocinasComunales.svg" width="50" height="50" align="center" >hola hosdfsdfg</p>')
     .addTo( map );
   }

   var iconCR = L.icon({
    iconUrl: 'Images/Group6.svg',
    iconRetinaUrl: 'Images/Group6.svg',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
    });

   for ( var i=0; i < salaEvento.length; ++i ) 
   {
     L.marker( [salaEvento[i].lat, salaEvento[i].lng], {icon: iconCR} )
     .bindPopup( '<a href="' + salaEvento[i].url + '" target="_blank">' + salaEvento[i].name + '</a>' )
     .addTo( map );
   }

   var iconExcursion = L.icon({
    iconUrl: 'Images/Excursiones.svg',
    iconRetinaUrl: 'Images/Excursiones.svg',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
    });

   for ( var i=0; i < excursiones.length; ++i ) 
   {
     L.marker( [excursiones[i].lat, excursiones[i].lng], {icon: iconExcursion} )
     .bindPopup( '<a href="' + excursiones[i].url + '" target="_blank">' + excursiones[i].name + '</a>' )
     .addTo( map );
   }

   var iconPlazas = L.icon({
    iconUrl: 'Images/PlazaDeportes.svg',
    iconRetinaUrl: 'Images/PlazaDeportes.svg',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
    });

   for ( var i=0; i < plazas.length; ++i ) 
   {
     L.marker( [plazas[i].lat, plazas[i].lng], {icon: iconPlazas} )
     .bindPopup( '<a href="' + plazas[i].url + '" target="_blank">' + plazas[i].name + '</a>' )
     .addTo( map );
   }

   var iconRedondeles = L.icon({
    iconUrl: 'Images/Redondeles.svg',
    iconRetinaUrl: 'Images/Redondeles.svg',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
    });

   for ( var i=0; i < redondeles.length; ++i ) 
   {
     L.marker( [redondeles[i].lat, redondeles[i].lng], {icon: iconRedondeles} )
     .bindPopup( '<a href="' + redondeles[i].url + '" target="_blank">' + redondeles[i].name + '</a>' )
     .addTo( map );
   }

   var iconSalaReuni = L.icon({
    iconUrl: 'Images/SalaReuniones.svg',
    iconRetinaUrl: 'Images/SalaReuniones.svg',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
    });

   for ( var i=0; i < salaReuniones.length; ++i ) 
   {
     L.marker( [salaReuniones[i].lat, salaReuniones[i].lng], {icon: iconSalaReuni} )
     .bindPopup( '<a href="' + salaReuniones[i].url + '" target="_blank">' + salaReuniones[i].name + '</a>' )
     .addTo( map );
   }

   var iconSalonComunal = L.icon({
    iconUrl: 'Images/SalonComunal.svg',
    iconRetinaUrl: 'Images/SalonComunal.svg',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
    });

   for ( var i=0; i < salonComunales.length; ++i ) 
   {
     L.marker( [salonComunales[i].lat, salonComunales[i].lng], {icon: iconSalonComunal} )
     .bindPopup( '<a href="' + salonComunales[i].url + '" target="_blank">' + salonComunales[i].name + '</a>' )
     .addTo( map );
   }

   var iconSalonBelleza = L.icon({
    iconUrl: 'Images/SalonesBelleza.svg',
    iconRetinaUrl: 'Images/SalonesBelleza.svg',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
    });

   for ( var i=0; i < salonBelleza.length; ++i ) 
   {
     L.marker( [salonBelleza[i].lat, salonBelleza[i].lng], {icon: iconSalonBelleza} )
     .bindPopup( '<a href="' + salonBelleza[i].url + '" target="_blank">' + salonBelleza[i].name + '</a>' )
     .addTo( map );
   }