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

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


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

var map = L.map('Map',{layers:googleSat	}).setView([46.32, 7.05], 11.5);


//Base layers definition and addition
var baseLayers = {
	"sat": googleSat,
	"OSM Mapnik": osmMap,
	"Carto DarkMatter": cartoMap,
	"Stamen Toner": stamenMap
};
	  
//Add baseLayers to map as control layers
	c = L.control.layers(baseLayers);
//ajout d'échelle sur la carte
	scale =	L.control.scale().addTo(map);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////SIDEBAR////////////////////////////////////////////////////////////////////////
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
	  

	//////////////////////////////////////////////////////////////////////////////////
	// Les fonction permettant d'ouvrir l'onglet de selection lié aux fonds de cartes
	/////////////////////////////////////////////////////////////////////////////////
	  function openFdc() {
		document.getElementById("OuvrirFdc").style.height = "200px";
		document.getElementById("OuvrirFdc").style.backgroundColor = 'lightgrey' ; 
		document.getElementById("boutonFdc").style.backgroundColor = 'grey' ; 
		document.getElementById("OuvrirFdc").style.borderBottomLeftRadius = '5px'; 
		document.getElementById("OuvrirFdc").style.borderBottomrightRadius = '5px'; 
		document.getElementById("OpenFdc").style.backgroundColor = 'grey' ;
		document.getElementById("OpenFdc").style.color = 'white' ;
	  }	

	//fonction qui permet d'ourir le fond de carte google satellite
		function OuvrirImg_sat() {
    	//création de la nouvelle couche
    		L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
			maxZoom: 18,
			subdomains:['mt0','mt1','mt2','mt3']
			}).addTo(map);
    	};

	//fonction qui permet d'ourir le fond de carte OSM
		function OuvrirImg_OSM(){
        	//création de la nouvelle couche
			L.tileLayer('https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
			attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			minZoom: 0,
			maxZoom: 20,
			subdomains: 'abcd',
			accessToken: 'PC2JcrjT5SXkrWg5SDm4ezZKZJoZyNxzqAQ41pkWxK7DonJJV4zK76ZCcRVtfVfn'
			}).addTo(map);
		};

	//fonction qui permet d'ourir le fond de carte Esri terrain
		function OuvrirImg_E(){
	    	//création de la nouvelle couche
			L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
			attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
			}).addTo(map);
		};

	//fonction qui permet d'ourir le fond de carte OSM CH
		function OuvrirImg_OsmCH(){
	    	//création de la nouvelle couche
			L.tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			bounds: [[45, 5], [48, 11]]
			}).addTo(map);
		};

		//Fonction qui permet de fermet l'onglet de selection lié au fond de carte
	  	function closeFdc(){
			document.getElementById("OuvrirFdc").style.height = "0px";
			document.getElementById("boutonFdc").style.backgroundColor = '#111' ; 
			document.getElementById("OpenFdc").style.backgroundColor = '#111' ;
			document.getElementById("OpenFdc").style.color = '#818181' ;
	  	}



///////////////////////////////////////////////////////////////////////////////////////////////
////////Fonction qui perment d'ouvrir et de fermer la section liée au données thématiques//////
///////////////////////////////////////////////////////////////////////////////////////////////
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

	 
	  
	  