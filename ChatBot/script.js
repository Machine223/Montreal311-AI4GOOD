
var map = null;
var marker = null;
var stations = null;
var nomStations = null;
var arr = [];
var allStation = [];
var latTemp = null;
var lngTemp = null;
var dataSet = [];
var index = 0;

var ids = null;
var vd = null;
var b = null;
var bd = null;
var s = null;
var vid = null;
var hs = null;
var bid = null;

$(function() {

//   // On met le JSON dans une liste
//   $.getJSON("https://secure.bixi.com/data/stations.json", function(data) {
//     stations = jQuery.map(data.stations, function(item, index) {
//       arr[index] = item.s;
//       allStation[index] = item;
//     });
//     updateTable();
//   });

    // Initialisation de l'autocomplete
    $("#search_bar").autocomplete({
      source: arr,
      select: function(event, ui){
        // Actualisation du champ de localisation
        var selected = ui.item.label;
        $('#localisation').text(selected);
        // Trouver données sur station
        for(var item of allStation){
          if(item.s == selected){
            latTemp = item.la;
            lngTemp = item.lo;
            $('#ids').text(item.id);
            $('#vd').text(item.ba);
            if(item.ba <= 0){
              $('#vd').css("background-color", "red");
            } else {
              $('#vd').css("background-color", "#29c67d");
            }
            if(item.id) {
              $('#b').text("Oui");
              $('#b').css("background-color", "red");
            } else {
              $('#b').text("Non");
              $('#b').css("background-color", "#29c67d");
            }
            $('#bd').text(item.da);
            if(item.da <= 0){
              $('#bd').css("background-color", "red");
            } else {
              $('#bd').css("background-color", "#29c67d");
            }
            if(item.su) {
              $('#s').text("Oui");
              $('#s').css("background-color", "red");
            } else {
              $('#s').text("Non");
              $('#s').css("background-color", "#29c67d");
            }
            $('#vid').text(item.bx);
            if(item.m){
              $('#hs').text("Oui");
              $('#hs').css("background-color", "red");
            } else {
              $('#hs').text("Non");
              $('#hs').css("background-color", "#29c67d");
            }
            $('#bid').text(item.dx);
          }
        }
        // Mise à jour de la carte
        map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: Number(latTemp), lng: Number(lngTemp)},
          zoom: 17
        });

        marker = new google.maps.Marker({
          map: map,
          position: {lat: Number(latTemp), lng: Number(lngTemp)},
          animation: google.maps.Animation.BOUNCE
        });
      }
    });

    function updateTable(){
      console.log('hello');
      for(var items of allStation){
        
        var id = items.id;
        var nom = items.s;
        var velo = items.ba;
        var borne = items.da;
        var bloque = null;
        var suspendu = null;
        if (items.b){
          bloque = 'Oui';
        } else {
          bloque = 'Non';
        }
        if (items.su){
          suspendu = 'Oui';
        } else {
          suspendu = 'Non';
        }
        dataSet[index] = [id, nom, velo, borne, bloque, suspendu];
        index++;
      }


      $('#dataTable').DataTable( {
          data: dataSet,
          columns: [
              { title: "ID" },
              { title: "Nom Station" },
              { title: "Vélos disponibles" },
              { title: "Bornes disponibles" },
              { title: "État bloqué" },
              { title: "État suspendu" }
          ]
      });
    }

});



