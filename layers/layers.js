var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_2 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_MunicipiosActualizadosLL_3 = new ol.format.GeoJSON();
var features_MunicipiosActualizadosLL_3 = format_MunicipiosActualizadosLL_3.readFeatures(json_MunicipiosActualizadosLL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosActualizadosLL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosActualizadosLL_3.addFeatures(features_MunicipiosActualizadosLL_3);
var lyr_MunicipiosActualizadosLL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosActualizadosLL_3, 
                style: style_MunicipiosActualizadosLL_3,
                interactive: true,
                title: '<img src="styles/legend/MunicipiosActualizadosLL_3.png" /> MunicipiosActualizadosLL'
            });
var format_Poblacion_LL_4 = new ol.format.GeoJSON();
var features_Poblacion_LL_4 = format_Poblacion_LL_4.readFeatures(json_Poblacion_LL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacion_LL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_LL_4.addFeatures(features_Poblacion_LL_4);
var lyr_Poblacion_LL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblacion_LL_4, 
                style: style_Poblacion_LL_4,
                interactive: true,
                title: '<img src="styles/legend/Poblacion_LL_4.png" /> Poblacion_LL'
            });
var format_Pavimentada2022_5 = new ol.format.GeoJSON();
var features_Pavimentada2022_5 = format_Pavimentada2022_5.readFeatures(json_Pavimentada2022_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pavimentada2022_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pavimentada2022_5.addFeatures(features_Pavimentada2022_5);
var lyr_Pavimentada2022_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pavimentada2022_5, 
                style: style_Pavimentada2022_5,
                interactive: true,
                title: '<img src="styles/legend/Pavimentada2022_5.png" /> Pavimentada2022'
            });
var format_Terraceria2022_6 = new ol.format.GeoJSON();
var features_Terraceria2022_6 = format_Terraceria2022_6.readFeatures(json_Terraceria2022_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terraceria2022_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terraceria2022_6.addFeatures(features_Terraceria2022_6);
var lyr_Terraceria2022_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Terraceria2022_6, 
                style: style_Terraceria2022_6,
                interactive: true,
                title: '<img src="styles/legend/Terraceria2022_6.png" /> Terraceria2022'
            });
var format_DGC2022_7 = new ol.format.GeoJSON();
var features_DGC2022_7 = format_DGC2022_7.readFeatures(json_DGC2022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGC2022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGC2022_7.addFeatures(features_DGC2022_7);
var lyr_DGC2022_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DGC2022_7, 
                style: style_DGC2022_7,
                interactive: true,
                title: '<img src="styles/legend/DGC2022_7.png" /> DGC2022'
            });
var format_TextoGeneral_8 = new ol.format.GeoJSON();
var features_TextoGeneral_8 = format_TextoGeneral_8.readFeatures(json_TextoGeneral_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TextoGeneral_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TextoGeneral_8.addFeatures(features_TextoGeneral_8);
var lyr_TextoGeneral_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TextoGeneral_8, 
                style: style_TextoGeneral_8,
                interactive: true,
                title: '<img src="styles/legend/TextoGeneral_8.png" /> TextoGeneral'
            });
var format_Alcantarilla2013_9 = new ol.format.GeoJSON();
var features_Alcantarilla2013_9 = format_Alcantarilla2013_9.readFeatures(json_Alcantarilla2013_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alcantarilla2013_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alcantarilla2013_9.addFeatures(features_Alcantarilla2013_9);
var lyr_Alcantarilla2013_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alcantarilla2013_9, 
                style: style_Alcantarilla2013_9,
                interactive: true,
                title: '<img src="styles/legend/Alcantarilla2013_9.png" /> Alcantarilla2013'
            });
var format_PCI2020_10 = new ol.format.GeoJSON();
var features_PCI2020_10 = format_PCI2020_10.readFeatures(json_PCI2020_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCI2020_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCI2020_10.addFeatures(features_PCI2020_10);
var lyr_PCI2020_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PCI2020_10, 
                style: style_PCI2020_10,
                interactive: true,
    title: 'PCI2020<br />\
    <img src="styles/legend/PCI2020_10_0.png" /> Bueno<br />\
    <img src="styles/legend/PCI2020_10_1.png" /> Excelente<br />\
    <img src="styles/legend/PCI2020_10_2.png" /> Malo<br />\
    <img src="styles/legend/PCI2020_10_3.png" /> Muy Bueno<br />\
    <img src="styles/legend/PCI2020_10_4.png" /> Muy Malo<br />\
    <img src="styles/legend/PCI2020_10_5.png" /> Reconstruccion<br />\
    <img src="styles/legend/PCI2020_10_6.png" /> Regular<br />'
        });
var format_FSS2022_11 = new ol.format.GeoJSON();
var features_FSS2022_11 = format_FSS2022_11.readFeatures(json_FSS2022_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FSS2022_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FSS2022_11.addFeatures(features_FSS2022_11);
var lyr_FSS2022_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FSS2022_11, 
                style: style_FSS2022_11,
                interactive: true,
                title: '<img src="styles/legend/FSS2022_11.png" /> FSS2022'
            });
var format_Puente2008_12 = new ol.format.GeoJSON();
var features_Puente2008_12 = format_Puente2008_12.readFeatures(json_Puente2008_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puente2008_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puente2008_12.addFeatures(features_Puente2008_12);
var lyr_Puente2008_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puente2008_12, 
                style: style_Puente2008_12,
                interactive: true,
                title: '<img src="styles/legend/Puente2008_12.png" /> Puente2008'
            });
var format_SiboloBlock2021_13 = new ol.format.GeoJSON();
var features_SiboloBlock2021_13 = format_SiboloBlock2021_13.readFeatures(json_SiboloBlock2021_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiboloBlock2021_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiboloBlock2021_13.addFeatures(features_SiboloBlock2021_13);
var lyr_SiboloBlock2021_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SiboloBlock2021_13, 
                style: style_SiboloBlock2021_13,
                interactive: true,
                title: 'SiboloBlock2021'
            });
var format_Kilometraje_14 = new ol.format.GeoJSON();
var features_Kilometraje_14 = format_Kilometraje_14.readFeatures(json_Kilometraje_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kilometraje_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kilometraje_14.addFeatures(features_Kilometraje_14);
var lyr_Kilometraje_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kilometraje_14, 
                style: style_Kilometraje_14,
                interactive: true,
                title: '<img src="styles/legend/Kilometraje_14.png" /> Kilometraje'
            });
var format_Aforo2018GiSystems_15 = new ol.format.GeoJSON();
var features_Aforo2018GiSystems_15 = format_Aforo2018GiSystems_15.readFeatures(json_Aforo2018GiSystems_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aforo2018GiSystems_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aforo2018GiSystems_15.addFeatures(features_Aforo2018GiSystems_15);
var lyr_Aforo2018GiSystems_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aforo2018GiSystems_15, 
                style: style_Aforo2018GiSystems_15,
                interactive: true,
                title: '<img src="styles/legend/Aforo2018GiSystems_15.png" /> Aforo2018GiSystems'
            });
var format_Tumulos2013_16 = new ol.format.GeoJSON();
var features_Tumulos2013_16 = format_Tumulos2013_16.readFeatures(json_Tumulos2013_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tumulos2013_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tumulos2013_16.addFeatures(features_Tumulos2013_16);
var lyr_Tumulos2013_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tumulos2013_16, 
                style: style_Tumulos2013_16,
                interactive: true,
                title: '<img src="styles/legend/Tumulos2013_16.png" /> Tumulos2013'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoad_2.setVisible(true);lyr_MunicipiosActualizadosLL_3.setVisible(false);lyr_Poblacion_LL_4.setVisible(false);lyr_Pavimentada2022_5.setVisible(true);lyr_Terraceria2022_6.setVisible(true);lyr_DGC2022_7.setVisible(true);lyr_TextoGeneral_8.setVisible(true);lyr_Alcantarilla2013_9.setVisible(false);lyr_PCI2020_10.setVisible(false);lyr_FSS2022_11.setVisible(true);lyr_Puente2008_12.setVisible(false);lyr_SiboloBlock2021_13.setVisible(false);lyr_Kilometraje_14.setVisible(false);lyr_Aforo2018GiSystems_15.setVisible(false);lyr_Tumulos2013_16.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_GoogleRoad_2,lyr_MunicipiosActualizadosLL_3,lyr_Poblacion_LL_4,lyr_Pavimentada2022_5,lyr_Terraceria2022_6,lyr_DGC2022_7,lyr_TextoGeneral_8,lyr_Alcantarilla2013_9,lyr_PCI2020_10,lyr_FSS2022_11,lyr_Puente2008_12,lyr_SiboloBlock2021_13,lyr_Kilometraje_14,lyr_Aforo2018GiSystems_15,lyr_Tumulos2013_16];
lyr_MunicipiosActualizadosLL_3.set('fieldAliases', {'COD_DEPT_1': 'COD_DEPT_1', 'COD_MUNI_1': 'COD_MUNI_1', 'NOMBRE_1': 'NOMBRE_1', 'DEPTO_1': 'DEPTO_1', 'AREA_KMÂ²_': 'AREA_KMÂ²_', 'PERIMETR_1': 'PERIMETR_1', });
lyr_Poblacion_LL_4.set('fieldAliases', {'codigo': 'codigo', 'cod_censo': 'cod_censo', 'departamen': 'departamen', 'municipio': 'municipio', 'lugar_pobl': 'lugar_pobl', 'categoria': 'categoria', });
lyr_Pavimentada2022_5.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'BACHEO2022': 'BACHEO2022', 'NOG_BACHEO': 'NOG_BACHEO', 'LIMPIEZA20': 'LIMPIEZA20', 'NOG_LIMPIE': 'NOG_LIMPIE', 'SUPER2022': 'SUPER2022', 'NOG_SUPER': 'NOG_SUPER', 'GUATECOMPR': 'GUATECOMPR', 'GUATECOMP1': 'GUATECOMP1', 'GUATECOMP2': 'GUATECOMP2', 'DESCARGAR_': 'DESCARGAR_', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', });
lyr_Terraceria2022_6.set('fieldAliases', {'FeatId1': 'FeatId1', 'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'TERRACERIA': 'TERRACERIA', 'NOG_TERRA': 'NOG_TERRA', 'SUPER2021': 'SUPER2021', 'NOG_SUPER': 'NOG_SUPER', 'GUATECOMPR': 'GUATECOMPR', 'GUATECOMP1': 'GUATECOMP1', 'DESCARGAR_': 'DESCARGAR_', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', });
lyr_DGC2022_7.set('fieldAliases', {'FeatId1': 'FeatId1', 'RUTA': 'RUTA', 'PROYECTO_D': 'PROYECTO_D', 'EMPRESA_DG': 'EMPRESA_DG', 'CONTRATO_O': 'CONTRATO_O', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'NOG_DGC': 'NOG_DGC', 'GUATECOMPR': 'GUATECOMPR', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', '_ACTA_DE_R': '_ACTA_DE_R', });
lyr_TextoGeneral_8.set('fieldAliases', {'ID': 'ID', 'ruta': 'ruta', 'texto': 'texto', 'longitud': 'longitud', 'latitud': 'latitud', 'tipo': 'tipo', });
lyr_Alcantarilla2013_9.set('fieldAliases', {'RUTA': 'RUTA', 'TRAMO': 'TRAMO', 'ESTADO_ENT': 'ESTADO_ENT', 'ENTRADA_CA': 'ENTRADA_CA', 'LONGITUD_T': 'LONGITUD_T', 'ESTACIONAM': 'ESTACIONAM', 'TIPO_MATER': 'TIPO_MATER', 'ESTADO_CAB': 'ESTADO_CAB', 'SALIDA_CAB': 'SALIDA_CAB', 'ESTADO_TUB': 'ESTADO_TUB', 'PORCENTAJE': 'PORCENTAJE', });
lyr_PCI2020_10.set('fieldAliases', {'TRAMOCOD': 'TRAMOCOD', 'TRAMO': 'TRAMO', 'LONG_T': 'LONG_T', 'RODADURA': 'RODADURA', 'PCI': 'PCI', 'CLASIFICAC': 'CLASIFICAC', 'ANCHO_RODA': 'ANCHO_RODA', 'NO_CARRIL': 'NO_CARRIL', 'HOMBROS': 'HOMBROS', 'ESPESOR_RO': 'ESPESOR_RO', });
lyr_FSS2022_11.set('fieldAliases', {'FeatId1': 'FeatId1', 'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'LIMPIEZA': 'LIMPIEZA', 'EMPRESA_LI': 'EMPRESA_LI', 'SUPERVISIO': 'SUPERVISIO', 'NOMBRE_SUP': 'NOMBRE_SUP', 'TELEFONO_S': 'TELEFONO_S', 'NOG_LIMPIE': 'NOG_LIMPIE', 'NOG_SUPER': 'NOG_SUPER', 'GUATECOM_L': 'GUATECOM_L', 'GUATECOM_S': 'GUATECOM_S', 'SNIP_FSS': 'SNIP_FSS', 'COMUNIDAD': 'COMUNIDAD', 'PROYECTO_F': 'PROYECTO_F', 'DOCUMENTO': 'DOCUMENTO', 'EMPRESA_FS': 'EMPRESA_FS', 'NOG_FSS': 'NOG_FSS', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', });
lyr_Puente2008_12.set('fieldAliases', {'TIPO_PUENT': 'TIPO_PUENT', 'CODIGO_RUT': 'CODIGO_RUT', 'DESCRICPIO': 'DESCRICPIO', 'ESTACION': 'ESTACION', 'NOMBRE_PUE': 'NOMBRE_PUE', 'TIPO_DE_VI': 'TIPO_DE_VI', 'LONGITUD': 'LONGITUD', });
lyr_SiboloBlock2021_13.set('fieldAliases', {'Name': 'Name', 'Position X': 'Position X', 'Position Y': 'Position Y', 'CA': 'CA', 'RD': 'RD', 'RN': 'RN', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_Kilometraje_14.set('fieldAliases', {'Altitude': 'Altitude', 'Descriptio': 'Descriptio', 'Name1': 'Name1', 'Position': 'Position', 'Position X': 'Position X', 'Position Y': 'Position Y', 'Visible': 'Visible', 'field_8': 'field_8', });
lyr_Aforo2018GiSystems_15.set('fieldAliases', {'Proyecto': 'Proyecto', 'Est': 'Est', 'Tipo': 'Tipo', 'Ubicación': 'Ubicación', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Ruta': 'Ruta', 'Departamen': 'Departamen', 'Descripci': 'Descripci', 'TPD': 'TPD', });
lyr_Tumulos2013_16.set('fieldAliases', {'Ruta': 'Ruta', 'descripcio': 'descripcio', 'Ancho': 'Ancho', 'Largo': 'Largo', 'estacion': 'estacion', 'Tipo': 'Tipo', 'Material': 'Material', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_MunicipiosActualizadosLL_3.set('fieldImages', {'COD_DEPT_1': 'TextEdit', 'COD_MUNI_1': 'TextEdit', 'NOMBRE_1': 'TextEdit', 'DEPTO_1': 'TextEdit', 'AREA_KMÂ²_': 'TextEdit', 'PERIMETR_1': 'TextEdit', });
lyr_Poblacion_LL_4.set('fieldImages', {'codigo': 'TextEdit', 'cod_censo': 'TextEdit', 'departamen': 'TextEdit', 'municipio': 'TextEdit', 'lugar_pobl': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Pavimentada2022_5.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'BACHEO2022': 'TextEdit', 'NOG_BACHEO': 'TextEdit', 'LIMPIEZA20': 'TextEdit', 'NOG_LIMPIE': 'TextEdit', 'SUPER2022': 'TextEdit', 'NOG_SUPER': 'TextEdit', 'GUATECOMPR': 'TextEdit', 'GUATECOMP1': 'TextEdit', 'GUATECOMP2': 'TextEdit', 'DESCARGAR_': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', });
lyr_Terraceria2022_6.set('fieldImages', {'FeatId1': 'TextEdit', 'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'TERRACERIA': 'TextEdit', 'NOG_TERRA': 'TextEdit', 'SUPER2021': 'TextEdit', 'NOG_SUPER': 'TextEdit', 'GUATECOMPR': 'TextEdit', 'GUATECOMP1': 'TextEdit', 'DESCARGAR_': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', });
lyr_DGC2022_7.set('fieldImages', {'FeatId1': 'TextEdit', 'RUTA': 'TextEdit', 'PROYECTO_D': 'TextEdit', 'EMPRESA_DG': 'TextEdit', 'CONTRATO_O': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'NOG_DGC': 'TextEdit', 'GUATECOMPR': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', '_ACTA_DE_R': 'TextEdit', });
lyr_TextoGeneral_8.set('fieldImages', {'ID': 'TextEdit', 'ruta': 'TextEdit', 'texto': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'tipo': 'TextEdit', });
lyr_Alcantarilla2013_9.set('fieldImages', {'RUTA': 'TextEdit', 'TRAMO': 'TextEdit', 'ESTADO_ENT': 'TextEdit', 'ENTRADA_CA': 'TextEdit', 'LONGITUD_T': 'TextEdit', 'ESTACIONAM': 'TextEdit', 'TIPO_MATER': 'TextEdit', 'ESTADO_CAB': 'TextEdit', 'SALIDA_CAB': 'TextEdit', 'ESTADO_TUB': 'TextEdit', 'PORCENTAJE': 'TextEdit', });
lyr_PCI2020_10.set('fieldImages', {'TRAMOCOD': 'TextEdit', 'TRAMO': 'TextEdit', 'LONG_T': 'TextEdit', 'RODADURA': 'TextEdit', 'PCI': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'ANCHO_RODA': 'TextEdit', 'NO_CARRIL': 'TextEdit', 'HOMBROS': 'TextEdit', 'ESPESOR_RO': 'TextEdit', });
lyr_FSS2022_11.set('fieldImages', {'FeatId1': 'TextEdit', 'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'LIMPIEZA': 'TextEdit', 'EMPRESA_LI': 'TextEdit', 'SUPERVISIO': 'TextEdit', 'NOMBRE_SUP': 'TextEdit', 'TELEFONO_S': 'TextEdit', 'NOG_LIMPIE': 'TextEdit', 'NOG_SUPER': 'TextEdit', 'GUATECOM_L': 'TextEdit', 'GUATECOM_S': 'TextEdit', 'SNIP_FSS': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'PROYECTO_F': 'TextEdit', 'DOCUMENTO': 'TextEdit', 'EMPRESA_FS': 'TextEdit', 'NOG_FSS': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_Puente2008_12.set('fieldImages', {'TIPO_PUENT': 'TextEdit', 'CODIGO_RUT': 'TextEdit', 'DESCRICPIO': 'TextEdit', 'ESTACION': 'TextEdit', 'NOMBRE_PUE': 'TextEdit', 'TIPO_DE_VI': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_SiboloBlock2021_13.set('fieldImages', {'Name': 'TextEdit', 'Position X': 'TextEdit', 'Position Y': 'TextEdit', 'CA': 'TextEdit', 'RD': 'TextEdit', 'RN': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_Kilometraje_14.set('fieldImages', {'Altitude': 'TextEdit', 'Descriptio': 'TextEdit', 'Name1': 'TextEdit', 'Position': 'TextEdit', 'Position X': 'TextEdit', 'Position Y': 'TextEdit', 'Visible': 'TextEdit', 'field_8': 'TextEdit', });
lyr_Aforo2018GiSystems_15.set('fieldImages', {'Proyecto': 'TextEdit', 'Est': 'TextEdit', 'Tipo': 'TextEdit', 'Ubicación': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Ruta': 'TextEdit', 'Departamen': 'TextEdit', 'Descripci': 'TextEdit', 'TPD': 'TextEdit', });
lyr_Tumulos2013_16.set('fieldImages', {'Ruta': 'TextEdit', 'descripcio': 'TextEdit', 'Ancho': 'TextEdit', 'Largo': 'TextEdit', 'estacion': 'TextEdit', 'Tipo': 'TextEdit', 'Material': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_MunicipiosActualizadosLL_3.set('fieldLabels', {'COD_DEPT_1': 'no label', 'COD_MUNI_1': 'no label', 'NOMBRE_1': 'no label', 'DEPTO_1': 'no label', 'AREA_KMÂ²_': 'no label', 'PERIMETR_1': 'no label', });
lyr_Poblacion_LL_4.set('fieldLabels', {'codigo': 'no label', 'cod_censo': 'no label', 'departamen': 'no label', 'municipio': 'no label', 'lugar_pobl': 'no label', 'categoria': 'no label', });
lyr_Pavimentada2022_5.set('fieldLabels', {'RUTA': 'inline label', 'DESCRIPCIO': 'inline label', 'LONGITUD': 'inline label', 'BACHEO2022': 'inline label', 'NOG_BACHEO': 'inline label', 'LIMPIEZA20': 'inline label', 'NOG_LIMPIE': 'inline label', 'SUPER2022': 'inline label', 'NOG_SUPER': 'inline label', 'GUATECOMPR': 'inline label', 'GUATECOMP1': 'inline label', 'GUATECOMP2': 'inline label', 'DESCARGAR_': 'inline label', 'DEPARTAMEN': 'inline label', 'MUNICIPIO': 'inline label', 'UBG': 'no label', });
lyr_Terraceria2022_6.set('fieldLabels', {'FeatId1': 'inline label', 'RUTA': 'inline label', 'DESCRIPCIO': 'inline label', 'LONGITUD': 'inline label', 'TERRACERIA': 'inline label', 'NOG_TERRA': 'inline label', 'SUPER2021': 'inline label', 'NOG_SUPER': 'inline label', 'GUATECOMPR': 'inline label', 'GUATECOMP1': 'inline label', 'DESCARGAR_': 'inline label', 'DEPARTAMEN': 'inline label', 'MUNICIPIO': 'inline label', 'UBG': 'no label', });
lyr_DGC2022_7.set('fieldLabels', {'FeatId1': 'inline label', 'RUTA': 'inline label', 'PROYECTO_D': 'inline label', 'EMPRESA_DG': 'inline label', 'CONTRATO_O': 'inline label', 'DESCRIPCIO': 'inline label', 'LONGITUD': 'inline label', 'NOG_DGC': 'inline label', 'GUATECOMPR': 'inline label', 'DEPARTAMEN': 'inline label', 'MUNICIPIO': 'inline label', '_ACTA_DE_R': 'inline label', });
lyr_TextoGeneral_8.set('fieldLabels', {'ID': 'no label', 'ruta': 'no label', 'texto': 'no label', 'longitud': 'no label', 'latitud': 'no label', 'tipo': 'no label', });
lyr_Alcantarilla2013_9.set('fieldLabels', {'RUTA': 'no label', 'TRAMO': 'no label', 'ESTADO_ENT': 'inline label', 'ENTRADA_CA': 'inline label', 'LONGITUD_T': 'inline label', 'ESTACIONAM': 'inline label', 'TIPO_MATER': 'inline label', 'ESTADO_CAB': 'inline label', 'SALIDA_CAB': 'inline label', 'ESTADO_TUB': 'inline label', 'PORCENTAJE': 'inline label', });
lyr_PCI2020_10.set('fieldLabels', {'TRAMOCOD': 'no label', 'TRAMO': 'no label', 'LONG_T': 'no label', 'RODADURA': 'inline label', 'PCI': 'inline label', 'CLASIFICAC': 'inline label', 'ANCHO_RODA': 'inline label', 'NO_CARRIL': 'inline label', 'HOMBROS': 'inline label', 'ESPESOR_RO': 'inline label', });
lyr_FSS2022_11.set('fieldLabels', {'FeatId1': 'no label', 'RUTA': 'header label', 'DESCRIPCIO': 'inline label', 'LONGITUD': 'inline label', 'LIMPIEZA': 'inline label', 'EMPRESA_LI': 'inline label', 'SUPERVISIO': 'inline label', 'NOMBRE_SUP': 'inline label', 'TELEFONO_S': 'inline label', 'NOG_LIMPIE': 'inline label', 'NOG_SUPER': 'inline label', 'GUATECOM_L': 'inline label', 'GUATECOM_S': 'inline label', 'SNIP_FSS': 'inline label', 'COMUNIDAD': 'inline label', 'PROYECTO_F': 'inline label', 'DOCUMENTO': 'inline label', 'EMPRESA_FS': 'inline label', 'NOG_FSS': 'inline label', 'DEPARTAMEN': 'inline label', 'MUNICIPIO': 'inline label', });
lyr_Puente2008_12.set('fieldLabels', {'TIPO_PUENT': 'inline label', 'CODIGO_RUT': 'inline label', 'DESCRICPIO': 'inline label', 'ESTACION': 'inline label', 'NOMBRE_PUE': 'inline label', 'TIPO_DE_VI': 'inline label', 'LONGITUD': 'inline label', });
lyr_SiboloBlock2021_13.set('fieldLabels', {'Name': 'no label', 'Position X': 'no label', 'Position Y': 'no label', 'CA': 'no label', 'RD': 'no label', 'RN': 'no label', 'DESCRIPCIO': 'no label', });
lyr_Kilometraje_14.set('fieldLabels', {'Altitude': 'no label', 'Descriptio': 'no label', 'Name1': 'no label', 'Position': 'no label', 'Position X': 'no label', 'Position Y': 'no label', 'Visible': 'no label', 'field_8': 'no label', });
lyr_Aforo2018GiSystems_15.set('fieldLabels', {'Proyecto': 'no label', 'Est': 'inline label', 'Tipo': 'inline label', 'Ubicación': 'inline label', 'Longitud': 'no label', 'Latitud': 'no label', 'Ruta': 'no label', 'Departamen': 'inline label', 'Descripci': 'inline label', 'TPD': 'inline label', });
lyr_Tumulos2013_16.set('fieldLabels', {'Ruta': 'inline label', 'descripcio': 'no label', 'Ancho': 'inline label', 'Largo': 'inline label', 'estacion': 'inline label', 'Tipo': 'inline label', 'Material': 'inline label', 'longitud': 'no label', 'latitud': 'no label', });
lyr_Tumulos2013_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});