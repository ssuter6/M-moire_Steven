///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
//////////////////////////////////////Paramètre de la carte//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OSM tiles attribution and URL
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = '&copy; ' + osmLink;

//Carto tiles attribution and URL
var cartoLink = '<a href="http://cartodb.com/attributions">CartoDB</a>';
var cartoURL = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
var cartoAttrib = '&copy; ' + osmLink + ' &copy; ' + cartoLink;

//Stamen Toner tiles attribution and URL
var stamenURL = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}';
var stamenAttrib = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

//Creation of map tiles
var osmMap = L.tileLayer(osmURL, {attribution: osmAttrib});
var cartoMap = L.tileLayer(cartoURL, {attribution: cartoAttrib});
var stamenMap = L.tileLayer(stamenURL,{
    attribution: stamenAttrib,
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});

var map = L.map('Map',{layers:osmMap}).setView([46.32, 7.05], 11.5);

//Base layers definition and addition
var baseLayers = {
	"OSM Mapnik": osmMap,
	"Carto DarkMatter": cartoMap,
	"Stamen Toner": stamenMap
}
	  
//Add baseLayers to map as control layers
	c = L.control.layers(baseLayers).addTo(map);
	$('#OuvrirFdc').append(c.onAdd(map))
	
	scale =	L.control.scale().addTo(map);

// Initialise the FeatureGroup to store editable layers
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

// define custom marker
var MyCustomMarker = L.Icon.extend({
  options: {
    shadowUrl: null,
    iconAnchor: new L.Point(12, 12),
    iconSize: new L.Point(24, 24),
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Information_icon4_orange.svg'
  }
});

var drawPluginOptions = {
  position: 'topright',
  draw: {
    polyline: {
      shapeOptions: {
        color: '#f357a1',
        weight: 10
      }
    },
    polygon: {
      allowIntersection: false, // Restricts shapes to simple polygons
      drawError: {
        color: '#e1e100', // Color the shape will turn when intersects
        message: '<strong>Polygon draw does not allow intersections!<strong> (allowIntersection: false)' // Message that will show when intersect
      },
      shapeOptions: {
        color: '#bada55'
      }
    },
    circle: false, // Turns off this drawing tool
    rectangle: {
      shapeOptions: {
        clickable: false
      }
    },
    marker: {
      icon: new MyCustomMarker()
    }
  },
  edit: {
    featureGroup: editableLayers, //REQUIRED!!
    remove: false
  }
};





// Initialise the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw(drawPluginOptions);
map.addControl(drawControl);


var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);




map.on('draw:created', function(e) {
  var type = e.layerType,
    layer = e.layer;

  if (type === 'marker') {
    layer.bindPopup('A popup!');
  }

  editableLayers.addLayer(layer);
});
	


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		 /////////////////////////////////////////SIDEBAR/////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	 //Fonction qui permet d'ouvrir et de fermer notre sidebar 
	 function openNav() {
		document.getElementById("mySidebar").style.width = "355px";
		document.getElementById("Title").style.marginLeft = "355px";
	  }
	  
	  function closeNav() {
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("Title").style.marginLeft= "0";
	  }	
	  
	// Fonction qui permet d'ouvrir et de fermer la section liée au fond de carte
	  function openFdc() {
		document.getElementById("OuvrirFdc").style.height = "200px";
		document.getElementById("OuvrirFdc").style.backgroundColor = 'green' ; 
		document.getElementById("boutonFdc").style.backgroundColor = 'green' ; 
		document.getElementById("OpenFdc").style.backgroundColor = 'green' ;
		document.getElementById("OpenFdc").style.color = 'white' ;
	  }	

	  function closeFdc(){
		document.getElementById("OuvrirFdc").style.height = "0px";
		document.getElementById("boutonFdc").style.backgroundColor = 'black' ; 
		document.getElementById("OpenFdc").style.backgroundColor = 'black' ;
		document.getElementById("OpenFdc").style.color = '#818181' ;
	  }

	// Fonction qui perment d'ouvrir et de fermer la section liée au données thématiques
	  function openDth() {
		document.getElementById("OuvrirDth").style.height = "200px";
		document.getElementById("OuvrirDth").style.backgroundColor = 'green' ; 
		document.getElementById("boutonDth").style.backgroundColor = 'green' ; 
		document.getElementById("OpenDth").style.backgroundColor = 'green' ;
		document.getElementById("OpenDth").style.color = 'white' ;
	  }	

	  function closeDth(){
		document.getElementById("OuvrirDth").style.height = "0px";
		document.getElementById("boutonDth").style.backgroundColor = 'black' ; 
		document.getElementById("OpenDth").style.backgroundColor = 'black' ;
		document.getElementById("OpenDth").style.color = '#818181' ;

	  }

	  // Fonction qui perment d'ouvrir et de fermer la section permettant de mesurer et dessiner sur la carte
	  function openMD() {
		document.getElementById("OuvrirMD").style.height = "200px";
		document.getElementById("OuvrirMD").style.backgroundColor = 'green' ; 
		document.getElementById("boutonMD").style.backgroundColor = 'green' ; 
		document.getElementById("OpenMD").style.backgroundColor = 'green' ;
		document.getElementById("OpenMD").style.color = 'white' ;
	  }	

	  function closeMD(){
		document.getElementById("OuvrirMD").style.height = "0px";
		document.getElementById("boutonMD").style.backgroundColor = 'black' ; 
		document.getElementById("OpenMD").style.backgroundColor = 'black' ;
		document.getElementById("OpenMD").style.color = '#818181' ;

	  }

	  	  // Fonction qui perment d'ouvrir et de fermer la section permettant d'imprimer la carte
	  function openImp() {
		document.getElementById("OuvrirImp").style.height = "200px";
		document.getElementById("OuvrirImp").style.backgroundColor = 'green' ; 
		document.getElementById("boutonImp").style.backgroundColor = 'green' ; 
		document.getElementById("OpenImp").style.backgroundColor = 'green' ;
		document.getElementById("OpenImp").style.color = 'white' ;
	  }	

	  function closeImp(){
		document.getElementById("OuvrirImp").style.height = "0px";
		document.getElementById("boutonImp").style.backgroundColor = 'black' ; 
		document.getElementById("OpenImp").style.backgroundColor = 'black' ;
		document.getElementById("OpenImp").style.color = '#818181' ;

	  }

	// Fonction qui perment d'ouvrir et de fermer la section liée au droits du projet
	  function openDroits() {
		document.getElementById("OuvrirDroits").style.height = "200px";
		document.getElementById("OuvrirDroits").style.backgroundColor = 'green' ; 
		document.getElementById("boutonDroits").style.backgroundColor = 'green' ; 
		document.getElementById("OpenDroits").style.backgroundColor = 'green' ;
		document.getElementById("OpenDroits").style.color = 'white' ;
	  }	

	  function closeDroits(){
		document.getElementById("OuvrirDroits").style.height = "0px";
		document.getElementById("boutonDroits").style.backgroundColor = 'black' ; 
		document.getElementById("OpenDroits").style.backgroundColor = 'black' ;
		document.getElementById("OpenDroits").style.color = '#818181' ;

	  }
	  
	  