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

		var style_dis_aigle= {
			fillColor: '#800026',
			fillOpacity: 0,
			weight:1
		   };

		var style__hors_dis_aigle= {
			fillColor: 'black',
			fillOpacity: 0.2,
			weight:0
		   };

	var map = 	L.map('Map',{layers:esri,maxBounds:bounds,pmIgnore: false}).setView([46.32, 7.15], 11);
	
				L.geoJSON(district_Aigle, 
					{style:style_dis_aigle,

						onEachFeature: function onEachFeature(feature, layer) {
							layer.on('click', function(){
							layer.bindPopup('<strong>' + "District d'" +feature.properties.NAME)})}						
					}).addTo(map);

					L.geoJSON(hors_DA, 
						{style:style__hors_dis_aigle,
	
							onEachFeature: function onEachFeature(feature, layer) {
								layer.on('click', function(){
								layer.bindPopup('<strong>' + "District d'" +feature.properties.NAME)})}						
						}).addTo(map);



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
		document.getElementById("fdc").style.height = "300px";
		document.getElementById("fdc").style.backgroundColor = '#f1f1f1' ; 
		document.getElementById("OuvrirFdc").style.backgroundColor = '#f1f1f1' ; 
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
		document.getElementById("fdc").style.height = "0px";
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
	  }	;

	  function closeDth(){
		document.getElementById("OuvrirDth").style.height = "0px";
		document.getElementById("boutonDth").style.backgroundColor = '#111' ; 
		document.getElementById("OpenDth").style.backgroundColor = '#111' ;
		document.getElementById("OpenDth").style.color = '#818181' ;

	  };

	  // Fonction permettant de selectionner un thème de données
	  $(document).ready(function() {
		$('#choix_theme').on('change', function(e) {
		
			
		// Selection des données dont la thématique correspond à l'agriculture/////////////////////////////////////////////


		  if ($('#choix_theme').val() == 'Agriculture') {
			document.getElementById("Opt_Agriculture").style.height = "195px";
			$("#Opt_Agriculture").show();

			 $("#Opt_Economie").hide();
			 $("#Opt_Culture").hide();
			 $("#Opt_Demographie").hide();
			 $("#Opt_Environnement").hide();
			 $("#Opt_Territoire").hide();
			 $("#Opt_Tourisme").hide();
		 	 }


		// Selection des données dont la thématique correspond à la culture
		  else if ($('#choix_theme').val() == 'Culture') {
			document.getElementById("Opt_Culture").style.height = "190px";
			$("#Opt_Culture").show();

			$("#Opt_Agriculture").hide();
			$("#Opt_Economie").hide();
			$("#Opt_Demographie").hide();
			$("#Opt_Environnement").hide();
			$("#Opt_Territoire").hide();
			$("#Opt_Tourisme").hide();
			} 

		// Selection des données dont la thématique correspond à la demographie	
			else if ($('#choix_theme').val() == 'Demographie') {
				document.getElementById("Opt_Demographie").style.height = "200px";
				$("#Opt_Demographie").show();

				$("#Opt_Agriculture").hide();
				$("#Opt_Economie").hide();
				$("#Opt_Culture").hide();
				$("#Opt_Environnement").hide();
				$("#Opt_Territoire").hide();
				$("#Opt_Tourisme").hide();
			} 
		
		// Selection des données dont la thématique correspond à l'économie	
			else if ($('#choix_theme').val() == 'Economie') {
				document.getElementById("Opt_Economie").style.height = "200px";
				$("#Opt_Economie").show();

				 $("#Opt_Agriculture").hide();
				 $("#Opt_Culture").hide();
				 $("#Opt_Demographie").hide();
				 $("#Opt_Environnement").hide();
			 	$("#Opt_Territoire").hide();
			 	$("#Opt_Tourisme").hide();
				} 
		
			// Selection des données dont la thématique correspond à l'envrionnement	
				else if ($('#choix_theme').val() == 'Environnement') {
					document.getElementById("Opt_Environnement").style.height = "200px";
					$("#Opt_Environnement").show();

					 $("#Opt_Agriculture").hide();
					 $("#Opt_Culture").hide();
					 $("#Opt_Demographie").hide();
					 $("#Opt_Economie").hide();
					 $("#Opt_Territoire").hide();
				 	$("#Opt_Tourisme").hide();
				}

				// Selection des données dont la thématique correspond au territoire	
				else if ($('#choix_theme').val() == 'Territoire') {
					document.getElementById("Opt_Territoire").style.height = "200px";
					$("#Opt_Territoire").show();
	
					 $("#Opt_Agriculture").hide();
					 $("#Opt_Culture").hide();
					 $("#Opt_Demographie").hide();
					 $("#Opt_Economie").hide();
					 $("#Opt_Environnement").hide();
				 	$("#Opt_Tourisme").hide();
				}

				// Selection des données dont la thématique correspond au tourisme
				else if ($('#choix_theme').val() == 'Tourisme') {
					document.getElementById("Opt_Tourisme").style.height = "200px";
					$("#Opt_Tourisme").show();
	
					 $("#Opt_Agriculture").hide();
					 $("#Opt_Culture").hide();
					 $("#Opt_Demographie").hide();
					 $("#Opt_Economie").hide();
					 $("#Opt_Territoire").hide();
				 	$("#Opt_Environnement").hide();
				} 

		  		else {
					$("#Opt_Agriculture").hide();
					 $("#Opt_Culture").hide();
					 $("#Opt_Demographie").hide();
					 $("#Opt_Economie").hide();
					 $("#Opt_Territoire").hide();
					 $("#Opt_Tourisme").hide();
				 	$("#Opt_Environnement").hide();
		 		 }
		
				}).trigger('change');
			});




		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Selection des données dont la thématique correspond à l'agriculture/////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		function close_box_droite(){
			document.getElementById("box_droite").style.height = "0px";
		  };
		function close_box_droite_bas(){
			document.getElementById("box_droite_bas").style.height = "0px";
		  };
////////////////////////// paramètres permettant d'afficher les GeoJson liée aux zones agricoles à la carte //////////////////////////7//////
			

			var champs = 'image/agri.jpg'
			var style_zne_agri = {
				"color": "brown",
				"weight": 0.2,
				"opacity": 1,
				"fillColor": 'yellow',
			   };

			// paramètres liés à l'interactivité des zones agri
			zne_agri = L.geoJSON(zones_agricoles, { 
				style:style_zne_agri,

				onEachFeature: function onEachFeature(feature, layer) {

					layer.on('mouseover', function () {
						this.setStyle({
						  'fillColor': '#d95f0e'
						});
					  });
					layer.on('mouseout', function () {
						this.setStyle({
						  'fillColor': 'yellow'
						});
					  });
					layer.on('click', function(){
						document.getElementById("box_droite").style.height = "400px";
						$("#znes_agric1").html('<h4>Surfaces agricoles</h4>'+
						'<img width="150" alt="bla" height="150" src="image/agri.jpg"> <br>')

						$("#znes_agric2").html('<p id="supérficie_agr"><b>Commune</b>'+' '
						+':'+' '+ feature.properties.NOM_COMMUNE + '</p>'+
						'<p id="supérficie_agr"><b>Supérficie totale</b>'+' '
						+':'+' '+ feature.properties.SURFACE+ 'm2'+'</p>'+
						'<p id="supérficie_agr"><b>type de surface</b>'+' '
						+':'+' '+ feature.properties.DENOM_COMM+ '</p>')
					
					});

					

					layer.bindPopup('<strong>' + 'Numéro de zone:' +feature.properties.NO_ZONE);
			}});

			// Ajout des surfaces agricoles si checkbox cochées
			document.querySelector("input[name=zn_1]").addEventListener('change', function() {
				if(this.checked) map.addLayer(zne_agri)
				  else map.removeLayer(zne_agri)
				});



//////////////////////////////////////////////// Paramètre liés aux surface de la zone viticoles////////////////////////////////////////
	
var style_zne_vitic = {
	"color": "brown",
	"weight": 0.2,
	"opacity": 1,
	"fillColor": 'orange',
   };

// paramètres liés à l'interactivité des zones agri
zne_vitic = L.geoJSON(zne_viti, { 
	style:style_zne_vitic,

	onEachFeature: function onEachFeature(feature, layer) {

		layer.on('mouseover', function () {
			this.setStyle({
			  'fillColor': 'darkred'
			});
		  });
		layer.on('mouseout', function () {
			this.setStyle({
			  'fillColor': 'orange'
			});
		  });
		layer.on('click', function(){
			document.getElementById("box_droite").style.height = "400px";
			$("#znes_agric1").html('<h4>Surfaces viticoles </h4>'+
			'<img width="150" alt="bla" height="150" src="image/vineyard.jpg"> <br>');

			$("#znes_agric2").html('<p id="supérficie_agr"><b>Commune</b>'+' '
			+':'+' '+ feature.properties.NOM_COMMUNE + '</p>'+
			'<p id="supérficie_agr"><b>Supérficie totale</b>'+' '
			+':'+' '+ feature.properties.SURFACE+ 'm2'+'</p>'+
			'<p id="supérficie_agr"><b>type de surface</b>'+' '
			+':'+' '+ feature.properties.DENOM_COMM+ '</p>')});

		layer.bindPopup('<strong>' + 'Numéro de zone:' +feature.properties.NO_ZONE);
}});

// Ajout des surfaces agricoles si checkbox cochées
document.querySelector("input[name=zn_2]").addEventListener('change', function() {
	if(this.checked) map.addLayer(zne_vitic)
	  else map.removeLayer(zne_vitic)
	});


//////////////////////////////////////////////// Paramètre liés aux surface des zones de pâturages////////////////////////////////////////
	
var style_zne_patur = {
	"color": "brown",
	"weight": 0.2,
	"opacity": 1,
	"fillColor": 'blue',
   };

// paramètres liés à l'interactivité des zones agri
zne_patur = L.geoJSON(zne_patur, { 
	style:style_zne_patur,

	onEachFeature: function onEachFeature(feature, layer) {

		layer.on('mouseover', function () {
			this.setStyle({
			  'fillColor': 'darkblue'
			});
		  });
		layer.on('mouseout', function () {
			this.setStyle({
			  'fillColor': 'blue'
			});
		  });
		layer.on('click', function(){
			document.getElementById("box_droite").style.height = "400px";
			$("#znes_agric1").html('<h4>Surfaces liées aux pâturages </h4>'+
			'<img width="150" alt="bla" height="150" src="image/paturages.jpg"> <br>');

			$("#znes_agric2").html('<p id="supérficie_agr"><b>Commune</b>'+' '
			+':'+' '+ feature.properties.NOM_COMMUNE + '</p>'+
			'<p id="supérficie_agr"><b>Supérficie totale</b>'+' '
			+':'+' '+ feature.properties.SURFACE+ 'm2'+'</p>'+
			'<p id="supérficie_agr"><b>type de surface</b>'+' '
			+':'+' '+ feature.properties.DENOM_COMM+ '</p>')});

		layer.bindPopup('<strong>' + 'Numéro de zone:' +feature.properties.NO_ZONE);
}});

// Ajout des surfaces agricoles si checkbox cochées
document.querySelector("input[name=zn_3]").addEventListener('change', function() {
	if(this.checked) map.addLayer(zne_patur)
	  else map.removeLayer(zne_patur)
	});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Selection des données dont la thématique correspond à la culture/////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////// Affichage des bars ////////////////////////////////////////////////////////////////////

	var bars_icon = L.icon({
		iconUrl: 'C:/Users/user/Documents/GitHub/M-moire_Steven/image/bars.jpg',
		iconSize: [32, 37],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	  });
	
		var bars = L.geoJSON(bars, { 
			onEachFeature: function onEachFeature(feature, layer) {
				layer.bindPopup('<strong>'+feature.properties.name)},
				pointToLayer: function (feature, latlng) {
					return L.marker(latlng, {icon: bars_icon});
					}
				});
	
	// Ajout des biblio si checkbox est cochées
	document.querySelector("input[name=bars]").addEventListener('change', function() {
		if(this.checked) map.addLayer(bars)
		  else map.removeLayer(bars)
		});


///////////////////////////////////////////////////////////// Affichage des bibliothèques ///////////////////////////////////////////////

	var biblio_icon = L.icon({
		iconUrl: 'C:/Users/user/Documents/GitHub/M-moire_Steven/image/biblio.jpg',
		iconSize: [32, 37],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	  });
	
		var biblio = L.geoJSON(biblio, { 
			onEachFeature: function onEachFeature(feature, layer) {
				layer.bindPopup('<strong>'+feature.properties.name)},
				pointToLayer: function (feature, latlng) {
					return L.marker(latlng, {icon: biblio_icon});
					}
				});
	
	// Ajout des biblio si checkbox est cochées
	document.querySelector("input[name=biblio]").addEventListener('change', function() {
		if(this.checked) map.addLayer(biblio)
		  else map.removeLayer(biblio)
		});

	
//////////////////////////////////////////////Affichage des cafe////////////////////// /////////////////////////////////////////////////

	var cafe_icon = L.icon({
		iconUrl: 'C:/Users/user/Documents/GitHub/M-moire_Steven/image/cafe.jpg',
		iconSize: [32, 37],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	  });
	
		var cafe = L.geoJSON(cafe, { 
			onEachFeature: function onEachFeature(feature, layer) {
				layer.bindPopup('<strong>'+feature.properties.name)},
				pointToLayer: function (feature, latlng) {
					return L.marker(latlng, {icon: cafe_icon});
					}
				});
	
	// Ajout des cine si checkbox est cochées
	document.querySelector("input[name=cafe]").addEventListener('change', function() {
		if(this.checked) map.addLayer(cafe)
		  else map.removeLayer(cafe)
		});


/////////////////////////////////////////////////////////////// Affichage des cinemas ///////////////////////////////////////////////////

	var cine_icon = L.icon({
		iconUrl: 'C:/Users/user/Documents/GitHub/M-moire_Steven/image/cine.jpg',
		iconSize: [32, 37],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	  });
	
		var cine = L.geoJSON(cine, { 
			onEachFeature: function onEachFeature(feature, layer) {
				layer.bindPopup('<strong>'+feature.properties.name)},
				pointToLayer: function (feature, latlng) {
					return L.marker(latlng, {icon: cine_icon});
					}
				});
	
	// Ajout des cine si checkbox est cochées
	document.querySelector("input[name=cine]").addEventListener('change', function() {
		if(this.checked) map.addLayer(cine)
		  else map.removeLayer(cine)
		});


////////////////////////////////////////////////////////////////// Affichage des cinemas/////////////////////////////////////////////////

	var muse_icon = L.icon({
		iconUrl: 'C:/Users/user/Documents/GitHub/M-moire_Steven/image/muse.jpg',
		iconSize: [32, 37],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	  });
	
		var muse = L.geoJSON(muse, { 
			onEachFeature: function onEachFeature(feature, layer) {
				layer.bindPopup('<strong>'+feature.properties.NAMN1)},
				pointToLayer: function (feature, latlng) {
					return L.marker(latlng, {icon: muse_icon});
					}
				});
	
	// Ajout des cine si checkbox est cochées
	document.querySelector("input[name=muse]").addEventListener('change', function() {
		if(this.checked) map.addLayer(muse)
		  else map.removeLayer(muse)
		});


////////////////////////////////////////////////// Affichage des restaurants/////////////////////////////////////////////////////////

	var resto_icon = L.icon({
		iconUrl: 'C:/Users/user/Documents/GitHub/M-moire_Steven/image/resto_icon.jpg',
		iconSize: [32, 37],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	  });
	
	var resto = L.geoJSON(resto, { 
			onEachFeature: function onEachFeature(feature, layer) {
				layer.bindPopup('<strong>'+feature.properties.name)},
				pointToLayer: function (feature, latlng) {
					return L.marker(latlng, {icon: resto_icon});
					}
				});
	
	// Ajout des biblio si checkbox est cochées
	document.querySelector("input[name=resto]").addEventListener('change', function() {
		if(this.checked) map.addLayer(resto)
		  else map.removeLayer(resto)
		});


////////////////////////////////////////////////// Affichage des salle de specatles /////////////////////////////////////////////////////////

var gr_salles_icon = L.icon({
	iconUrl: 'C:/Users/user/Documents/GitHub/M-moire_Steven/image/gr_salles.jpg',
	iconSize: [32, 37],
	iconAnchor: [16, 37],
	popupAnchor: [0, -28]
  });

var gr_salles = L.geoJSON(gr_salles, { 
		onEachFeature: function onEachFeature(feature, layer) {
			layer.bindPopup('<strong>'+feature.properties.name)},
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: gr_salles_icon});
				}
			});

// Ajout des biblio si checkbox est cochées
document.querySelector("input[name=gr_salles]").addEventListener('change', function() {
	if(this.checked) map.addLayer(gr_salles)
	  else map.removeLayer(gr_salles)
	});


////////////////////////////////////////////////// Affichage des théatres /////////////////////////////////////////////////////////

var theatre_icon = L.icon({
	iconUrl: 'C:/Users/user/Documents/GitHub/M-moire_Steven/image/theatre.jpg',
	iconSize: [32, 37],
	iconAnchor: [16, 37],
	popupAnchor: [0, -28]
  });

var theatres = L.geoJSON(theatres, { 
		onEachFeature: function onEachFeature(feature, layer) {
			layer.bindPopup('<strong>'+feature.properties.name)},
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: theatre_icon});
				}
			});

// Ajout des biblio si checkbox est cochées
document.querySelector("input[name=theatre]").addEventListener('change', function() {
	if(this.checked) map.addLayer(theatres)
	  else map.removeLayer(theatres)
	});



		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Selection des données dont la thématique correspond à la démographie/////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////// Affichage indicateur taux de natalité ///////////////////////////////////////////////

// fonction pour l'affichage des indicateurs en couleur

function getColor(d) {
    return d > 1.2 ? '#800026' :
           d> 1  ? '#BD0026' :
           d> 0.8  ? '#E31A1C' :
           d> 0.6 ?  '#FC4E2A' :
                      '#FFEDA0';
}

style_naiss = function style(feature) {
	return {
		fillColor: getColor(feature.properties.t_natalite),
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.7
	};
}

// ajout info relatives à l'indicateur taux natalité

naissance = L.geoJSON(naissance, { 
	style: style_naiss,

	onEachFeature: function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
		
		layer.on('click', function(){
			document.getElementById("box_droite").style.height = "400px";
			$("#znes_agric1").html('<h4>Naissances</h4>'+
			'<img width="150" alt="bla" height="150" src="image/paturages.jpg"> <br>');

			$("#znes_agric2").html('<p id="supérficie_agr"><b>Commune</b>'+' '
			+':'+' '+ feature.properties.NAME + '<br>' +
			'<b>Nombre de naissances</b>'+' '
			+':'+' '+ feature.properties.Naissance_vivante + '<br>' +
			'<b>Nombre total habitants </b>'+' '
			+':'+' '+ feature.properties.Effectif_janvier + 
			'</p>')});

		layer.bindPopup('<strong>' + 'Taux de natalité:' +feature.properties.t_natalite+'%');
}});

// interactivité au niveau de la carte 

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
}

function resetHighlight(e) {
    naissance.resetStyle(e.target);
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}


// Ajout thématique démographique (naissances) checkbox cochées
document.querySelector("input[name=naissance]").addEventListener('change', function() {
	if(this.checked) map.addLayer(naissance)
	  else map.removeLayer(naissance)
	});



///////////////////////////////////////////////////////////// Affichage indicateur taux de mortalité ///////////////////////////////////////////////

// fonction pour l'affichage des indicateurs en couleur

function getColor(d) {
    return d > 1.2 ? '#800026' :
           d > 1  ? '#BD0026' :
           d > 0.8  ? '#E31A1C' :
           d > 0.6 ?  '#FC4E2A' :
                      '#FFEDA0';
}

function style(feature) {
	return {
		fillColor: getColor(feature.properties.t_deces),
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.7
	};
}

// ajout info relatives à l'indicateur taux mortalité

deces = L.geoJSON(deces, { 
	style: style,

	onEachFeature: function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
		
		layer.on('click', function(){
			document.getElementById("box_droite").style.height = "400px";
			$("#znes_agric1").html('<h4>Déces</h4>'+
			'<img width="150" alt="bla" height="150" src="image/paturages.jpg"> <br>');

			$("#znes_agric2").html('<p id="supérficie_agr"><b>Commune</b>'+' '
			+':'+' '+ feature.properties.NAME + '<br>' +
			'<b>Nombre de déces</b>'+' '
			+':'+' '+ feature.properties.Deces + '<br>' +
			'<b>Nombre total habitants </b>'+' '
			+':'+' '+ feature.properties.Effectif_janvier + 
			'</p>')
		
			document.getElementById("box_droite_bas").style.height = "255px";
			var svg = d3 
				.select("#box_droite_bas") 
				.append("svg") 
				.attr("width", 600) 
				.attr("height", 500); 

				var svg = d3.select("svg"),  
				width = svg.attr("width") 
				height = svg.attr("height")

				var xScale = d3.scaleBand().range([0, width]).padding(0.5); 
				var yScale = d3.scaleLinear().range([height, 0]); 

				var g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")"); 

				d3.csv("../naiss_mort.csv").then(function (data) { 
					xScale.domain( 
					data.map(function (d) { 
					return d.NOM; 
					}) 
					); 
					yScale.domain([ 
					0, 
					d3.max(data, function (d) { 
					return d.t_deces; 
					}), 
					]); 
					}); 

					g.append("g") 
					.attr("transform", "translate(0," + height + ")") 
					.call(d3.axisBottom(xScale)) ;

					g.append("g") 
					.call(d3.axisLeft(yScale)) ;

		});

		layer.bindPopup('<strong>' + 'Taux de mortalité:' +feature.properties.t_deces	+'%');
}});

// interactivité au niveau de la carte 

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
}

function resetHighlight(e) {
    naissance.resetStyle(e.target);
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}


// Ajout thématique démographique (naissances) checkbox cochées
document.querySelector("input[name=deces]").addEventListener('change', function() {
	if(this.checked) map.addLayer(deces)
	  else map.removeLayer(deces)
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
	$("button#delete").css('background', '#F0F0F0');
  });

$( "button#Marqueur_Inact" ).click(function() {
	$( "button#Marqueur_Inact" ).css('background', '#7c92cf');
	$("button#Marqueur_Act").css('background', '#F0F0F0');
	$("button#Mesure_Distance_Act").css('background', '#F0F0F0');
	$("button#Mesure_surface_Act").css('background', '#F0F0F0');
	$("button#delete").css('background', '#F0F0F0');
  });

$( "button#Mesure_Distance_Act" ).click(function() {
	$( "button#Mesure_Distance_Act" ).css('background', '#7c92cf');
	$("button#Marqueur_Inact").css('background', '#F0F0F0');
	$("button#Marqueur_Act").css('background', '#F0F0F0');
	$("button#Mesure_surface_Act").css('background', '#F0F0F0');
	$("button#delete").css('background', '#F0F0F0');
  });

$( "button#Mesure_surface_Act" ).click(function() {
	$( "button#Mesure_surface_Act" ).css('background', '#7c92cf');
	$("button#Marqueur_Inact").css('background', '#F0F0F0');
	$("button#Mesure_Distance_Act").css('background', '#F0F0F0');
	$("button#Marqueur_Act").css('background', '#F0F0F0');
	$("button#delete").css('background', '#F0F0F0');
  });

  $( "button#delete" ).click(function() {
	$( "button#delete" ).css('background', '#7c92cf');
	$("button#Marqueur_Inact").css('background', '#F0F0F0');
	$("button#Mesure_Distance_Act").css('background', '#F0F0F0');
	$("button#Marqueur_Act").css('background', '#F0F0F0');
	$("button#Mesure_surface_Act").css('background', '#F0F0F0');
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

	  map.eachLayer(function (layer) {
		map.removeLayer(layer);
	});