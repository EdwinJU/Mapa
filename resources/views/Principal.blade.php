<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" type="text/css" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
      
      <script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js'></script>
      <script type='text/javascript' src='http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js'></script>

       <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
       <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <link href="css/style.css" rel="stylesheet" type="text/css">
   
</head>
<body>
      <nav>
        <div class="nav-wrapper">
          <a href="www.youtube.com" class="brand-logo"><img src="Images/Logo.svg"></a>
        </div>
      </nav>
            
      <div id="map" style="height: 440px; border: 1px solid #AAA;"></div>

      <script>
       cocina = [
       {
         "name": "Ciudad Quesada",
         "url": "https://en.wikipedia.org/wiki/Canada",
         "lat": 10.32361,
         "lng": -84.42694
       }
       ];

       salaEvento = [
       {
         "name": "San Jose",
         "url": "https://en.wikipedia.org/wiki/Canada",
         "lat": 9.92500,
         "lng": -84.08333
       }
       ];
       excursiones = [
       {
         "name": "Limon",
         "url": "https://en.wikipedia.org/wiki/Canada",
         "lat": 9.98333,
         "lng": -83.03333
       }
       ];
       plazas = [
       {
         "name": "Puntarenas",
         "url": "https://en.wikipedia.org/wiki/Canada",
         "lat": 9.97694,
         "lng": -84.82917
       }
       ];
       redondeles = [
       {
         "name": "Guapiles",
         "url": "https://en.wikipedia.org/wiki/Canada",
         "lat": 10.20528,
         "lng": -83.78917
       }
       ];
       salaReuniones = [
       {
         "name": "Puerto Jimenez",
         "url": "https://en.wikipedia.org/wiki/Canada",
         "lat": 8.53667,
         "lng": -83.30500
       }
       ];
       salonComunales = [
       {
         "name": "La Cruz",
         "url": "https://en.wikipedia.org/wiki/Canada",
         "lat": 11.07472,
         "lng": -85.62917
       }
       ];
       salonBelleza = [
       {
         "name": "Los Chiles",
         "url": "https://en.wikipedia.org/wiki/Canada",
         "lat": 11.03056,
         "lng": -84.71472
       }
       ];
      </script>

      <script type='text/javascript' src='mapa.js'></script>
     
</body>
</html>