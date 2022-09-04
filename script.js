///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
//////////////////////////////////////Paramètre de la carte//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var southWest = L.latLng(46.5, 6.6),
    northEast = L.latLng(46.1, 7.5),
    bounds = L.latLngBounds(southWest, northEast);

	var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
		maxBounds:bounds,
		minZoom:10.5,
		maxZoom: 22,
		subdomains:['mt0','mt1','mt2','mt3']
	});

	var OSM_Sombre = L.tileLayer('https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
		attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		minZoom:10.5,
		maxZoom: 22,
		subdomains: 'abcd',
		maxBounds: bounds,
		accessToken: 'PC2JcrjT5SXkrWg5SDm4ezZKZJoZyNxzqAQ41pkWxK7DonJJV4zK76ZCcRVtfVfn'
	});

	var Img_sat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
			minZoom:10.5,
			maxZoom: 22,
			maxBounds: bounds,
			subdomains:['mt0','mt1','mt2','mt3']
		});
	
	var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
		minZoom:10.5,
		maxZoom: 22,
		maxBounds: bounds,
		});
	
	var osmCh = L.tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
		minZoom:10.5,
		maxZoom: 22,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		maxBounds: bounds,
		});

	
	//////////Definition de nos couche de bases////////////////
	var baseLayers = {
		"sat": googleSat,
		"sat2": Img_sat,
		"OSM": osmCh,
		"osm_sombre" : OSM_Sombre,
		"Esri": esri
		};

	var map = 	L.map('Map',{layers:Img_sat,maxBounds:bounds,pmIgnore: false}).setView([46.32, 7.05], 11.5);
	  
	
	//Add baseLayers to map as control layers
		c = L.control.layers(baseLayers);

	//ajout d'échelle et du zoom sur la carte
		zoom =L.control.zoom({
			position: 'bottomleft'
			}).addTo(map);
		
		scale =	L.control.scale({
			position:"bottomleft"
			}).addTo(map);
	
		map.removeControl(map.zoomControl);


/*
let i = 0

map.on('pm:create', function(e){
	console.log(e)
	/*i += 1;
	let lat1 = e.layer._latlngs[0].lat
	let lat2 = e.layer._latlngs[1].lat
	let dist = lat1 - lat2;
	
});*/






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////SIDEBAR////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	 //Fonction qui permet d'ouvrir et de fermer notre sidebar 
	 function openNav() {
		document.getElementById("mySidebar").style.width = "375px";
		document.getElementById("Title").style.marginLeft = "375px";
	  }
	  
	  function closeNav() {
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("Title").style.marginLeft= "0";
	  }	
	  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// Les fonction permettant d'ouvrir l'onglet de selection lié aux fonds de cartes////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  function openFdc() {
		document.getElementById("OuvrirFdc").style.height = "260px";
		document.getElementById("OuvrirFdc").style.backgroundColor = 'lightgrey' ; 
		document.getElementById("boutonFdc").style.backgroundColor = 'grey' ; 
		document.getElementById("OuvrirFdc").style.borderBottomLeftRadius = '5px'; 
		document.getElementById("OuvrirFdc").style.borderBottomrightRadius = '5px'; 
		document.getElementById("OpenFdc").style.backgroundColor = 'grey' ;
		document.getElementById("OpenFdc").style.color = 'white' ;
	  };

	//fonction qui permet d'ourir le fond de carte google satellite
		function OuvrirImg_sat() {

			if (map.hasLayer(esri)) {
				map.removeLayer(esri);
			};	
			if (map.hasLayer(osmCh)) {
				map.removeLayer(osmCh);
			};
			if (map.hasLayer(OSM_Sombre)) {
				map.removeLayer(OSM_Sombre);
			};

			//création de la nouvelle couche
			map.addLayer(Img_sat);
		};
			
	//fonction qui permet d'ourir le fond de carte OSM
		function OuvrirImg_OSM(){

			if (map.hasLayer(esri)) {
				map.removeLayer(esri);
			};	
			if (map.hasLayer(osmCh)) {
				map.removeLayer(osmCh);
			};
			if (map.hasLayer(Img_sat)) {
				map.removeLayer(Img_sat);
			};

				//création de la nouvelle couche
				map.addLayer(OSM_Sombre);
		};

	//fonction qui permet d'ourir le fond de carte Esri terrain
		function OuvrirImg_E(){

			if (map.hasLayer(OSM_Sombre)) {
				map.removeLayer(OSM_Sombre);
			};	
			if (map.hasLayer(osmCh)) {
				map.removeLayer(osmCh);
			};
			if (map.hasLayer(Img_sat)) {
				map.removeLayer(Img_sat);
			};
			
			//création de la nouvelle couche
			map.addLayer(esri);	  
		};

	//fonction qui permet d'ourir le fond de carte OSM CH
		function OuvrirImg_OsmCH(){

			if (map.hasLayer(esri)) {
				map.removeLayer(esri);
			};	
			if (map.hasLayer(OSM_Sombre)) {
				map.removeLayer(OSM_Sombre);
			};
			if (map.hasLayer(Img_sat)) {
				map.removeLayer(Img_sat);
			};

			//création de la nouvelle couche
			map.addLayer(osmCh); 
		};

	//Fonction qui permet de fermet l'onglet de selection lié au fond de carte
	function closeFdc(){
		document.getElementById("OuvrirFdc").style.height = "0px";
		document.getElementById("boutonFdc").style.backgroundColor = '#111' ; 
		document.getElementById("OpenFdc").style.backgroundColor = '#111' ;
		document.getElementById("OpenFdc").style.color = '#818181' ;
	}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////Fonction qui perment d'ouvrir et de fermer la section liée au données thématiques///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  function openDth() {
		document.getElementById("OuvrirDth").style.height = "260px";
		document.getElementById("OuvrirDth").style.backgroundColor = 'lightgrey' ; 
		document.getElementById("boutonDth").style.backgroundColor = 'grey' ; 
		document.getElementById("OuvrirDth").style.borderBottomLeftRadius = '5px'; 
		document.getElementById("OuvrirDth").style.borderBottomrightRadius = '5px'; 
		document.getElementById("OpenDth").style.backgroundColor = 'grey' ;
		document.getElementById("OpenDth").style.color = 'white' ;
	  }	

	  function closeDth(){
		document.getElementById("OuvrirDth").style.height = "0px";
		document.getElementById("boutonDth").style.backgroundColor = '#111' ; 
		document.getElementById("OpenDth").style.backgroundColor = '#111' ;
		document.getElementById("OpenDth").style.color = '#818181' ;

	  }

	  $('select#choix_theme').on('change', function(e) {
		$('#theme_selectionner').text($(this).val());
	  });




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////Fonction qui perment d'ouvrir et de fermer la section liée aux outils de mesure/////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	  function openMD() {
		document.getElementById("OuvrirMD").style.height = "260px";
		document.getElementById("OuvrirMD").style.backgroundColor = 'lightgrey' ; 
		document.getElementById("boutonMD").style.backgroundColor = 'grey' ; 
		document.getElementById("OuvrirMD").style.borderBottomLeftRadius = '5px'; 
		document.getElementById("OuvrirMD").style.borderBottomrightRadius = '5px';
		document.getElementById("OpenMD").style.backgroundColor = 'grey' ;
		document.getElementById("OpenMD").style.color = 'white' ;
	  }	

	  function closeMD(){
		document.getElementById("OuvrirMD").style.height = "0px";
		document.getElementById("boutonMD").style.backgroundColor = '#111' ; 
		document.getElementById("OpenMD").style.backgroundColor = '#111' ;
		document.getElementById("OpenMD").style.color = '#818181' ;

	  }


///////////////////////////////////////////////Outils de mesure////////////////////////////////////////////////////////////////////////


var featureGroup = L.featureGroup().addTo(map);

        var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: featureGroup
        },
        draw: {
            polygon: false,
            polyline: false,
            rectangle: false,
            circle: false,
            marker: false
        }
    });


// Modification de l'icon du marker
L.Marker.prototype.options.icon = L.icon({
    iconUrl: "C:/Users/user/Documents/GitHub/M-moire_Steven/image/marker.jpg",
	iconSize: [30, 40],
});


/// Ajout des marqueurs///
function Marqueur_Act(){
	var options_marqueurs ={
		drawMarker:false,
		snappable: true,
  		snapDistance: 20,
		};
	map.pm.enableDraw('Marker', options_marqueurs);	
};
// Fonction permettant d'arrêter d'ajouter des marqueurs sur la carte
function Marqueur_Inact(){
	map.pm.disableDraw('Marker');
};


/// Ajout outil mesures de distances ///
function Mesure_Distance_Act(){
	var options_mesure_distance ={
		drawLine:false,
		snappable: true,
  		snapDistance: 20,
		};
	map.pm.enableDraw('Line', options_mesure_distance);	
};


/// Ajout outils mesures de surfaces ///
function Mesure_surface_Act(){
	var options_mesure_surfaces ={
		drawPolyLine:false,
		snappable: true,
  		snapDistance: 20,
		};
	map.pm.enableDraw('Poly', options_mesure_surfaces);
};


/// Ajout outils pour effacer les mesures précédentes ///
function effacer(){
		map.pm.toggleGlobalRemovalMode();
};


// Fonction permettant de changer la couleur des boutons lorsqu'on click dessus
$( "button#Marqueur_Act" ).click(function() {
	$( "button#Marqueur_Act" ).css('background', '#7c92cf');
	$("button#Marqueur_Inact").css('background', '#F0F0F0');
	$("button#Mesure_Distance_Act").css('background', '#F0F0F0');
	$("button#Mesure_surface_Act").css('background', '#F0F0F0');
  });

$( "button#Marqueur_Inact" ).click(function() {
	$( "button#Marqueur_Inact" ).css('background', '#7c92cf');
	$("button#Marqueur_Act").css('background', '#F0F0F0');
	$("button#Mesure_Distance_Act").css('background', '#F0F0F0');
	$("button#Mesure_surface_Act").css('background', '#F0F0F0');
  });

$( "button#Mesure_Distance_Act" ).click(function() {
	$( "button#Mesure_Distance_Act" ).css('background', '#7c92cf');
	$("button#Marqueur_Inact").css('background', '#F0F0F0');
	$("button#Marqueur_Act").css('background', '#F0F0F0');
	$("button#Mesure_surface_Act").css('background', '#F0F0F0');
  });

$( "button#Mesure_surface_Act" ).click(function() {
	$( "button#Mesure_surface_Act" ).css('background', '#7c92cf');
	$("button#Marqueur_Inact").css('background', '#F0F0F0');
	$("button#Mesure_Distance_Act").css('background', '#F0F0F0');
	$("button#Marqueur_Act").css('background', '#F0F0F0');
  });




	  	  // Fonction qui perment d'ouvrir et de fermer la section permettant d'imprimer la carte
	  function openImp() {
		document.getElementById("OuvrirImp").style.height = "260px";
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

	