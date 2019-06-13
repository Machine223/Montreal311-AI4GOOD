
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
  

    function updateTable(){
      console.log('hello');
      for(var items of allStation){
        
        var id = items.id;
        var nom = items.s;
        var requete = items.ba;
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
        dataSet[index] = [id, nom, requete, borne, bloque, suspendu];
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



