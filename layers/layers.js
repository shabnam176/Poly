var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TDSINTPoly_1 = new ol.format.GeoJSON();
var features_TDSINTPoly_1 = format_TDSINTPoly_1.readFeatures(json_TDSINTPoly_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDSINTPoly_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDSINTPoly_1.addFeatures(features_TDSINTPoly_1);
var lyr_TDSINTPoly_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDSINTPoly_1, 
                style: style_TDSINTPoly_1,
                popuplayertitle: "TDS-INT-Poly",
                interactive: true,
                title: '<img src="styles/legend/TDSINTPoly_1.png" /> TDS-INT-Poly'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TDSINTPoly_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TDSINTPoly_1];
lyr_TDSINTPoly_1.set('fieldAliases', {'NODENUM': 'NODENUM', 'Design': 'Design', 'calming': 'calming', ' POI': ' POI', 'control': 'control', 'Visibility': 'Visibility', ' Bike_path': ' Bike_path', 'SC-segment': 'SC-segment', 'TDS': 'TDS', 'Level': 'Level', 'NOM': 'NOM', });
lyr_TDSINTPoly_1.set('fieldImages', {'NODENUM': 'TextEdit', 'Design': 'TextEdit', 'calming': 'TextEdit', ' POI': 'TextEdit', 'control': 'TextEdit', 'Visibility': 'TextEdit', ' Bike_path': 'TextEdit', 'SC-segment': 'TextEdit', 'TDS': 'TextEdit', 'Level': 'TextEdit', 'NOM': 'TextEdit', });
lyr_TDSINTPoly_1.set('fieldLabels', {'NODENUM': 'inline label - visible with data', 'Design': 'inline label - visible with data', 'calming': 'inline label - visible with data', ' POI': 'inline label - visible with data', 'control': 'inline label - visible with data', 'Visibility': 'inline label - visible with data', ' Bike_path': 'inline label - visible with data', 'SC-segment': 'inline label - visible with data', 'TDS': 'inline label - visible with data', 'Level': 'inline label - always visible', 'NOM': 'hidden field', });
lyr_TDSINTPoly_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});