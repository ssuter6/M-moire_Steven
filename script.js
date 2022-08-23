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

var map = L.map('Map',{layers:osmMap}).setView([46.29, 7.04], 11.5);

		//Base layers definition and addition
		var baseLayers = {
			"OSM Mapnik": osmMap,
			"Carto DarkMatter": cartoMap,
			"Stamen Toner": stamenMap
		}
	  
		//Add baseLayers to map as control layers
		 L.control.layers(baseLayers).addTo(map);
		 L.control.scale().addTo(map);


	 //Fonction qui permet d'ouvrir et de fermer notre sidebar 
	 function openNav() {
		document.getElementById("mySidebar").style.width = "355px";
		document.getElementById("Title").style.marginLeft = "355px";
	  }
	  
	  function closeNav() {
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("Title").style.marginLeft= "0";
	  }	
	  
	  function openFdc() {
		document.getElementById("OuvrirFdc").style.height = "200px";
		document.getElementById("OuvrirFdc").style.backgroundColor = 'green' ; 
		document.getElementById("boutonFdc").style.backgroundColor = 'green' ; 
		document.getElementById("boutonFdc").style.backgroundColor = 'green' ; 
		document.getElementById("OpenFdc").style.backgroundColor = 'green' ;
	  }	

	  function closeFdc(){
		document.getElementById("OuvrirFdc").style.height = "0px";
		document.getElementById("OuvrirFdc").style.backgroundColor = 'black' ; 
		document.getElementById("boutonFdc").style.backgroundColor = 'black' ; 
		document.getElementById("boutonFdc").style.backgroundColor = 'black' ; 
		document.getElementById("OpenFdc").style.backgroundColor = 'black' ;
	  }
