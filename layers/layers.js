var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Poblacion_LL_1 = new ol.format.GeoJSON();
var features_Poblacion_LL_1 = format_Poblacion_LL_1.readFeatures(json_Poblacion_LL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacion_LL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_LL_1.addFeatures(features_Poblacion_LL_1);
var lyr_Poblacion_LL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblacion_LL_1, 
                style: style_Poblacion_LL_1,
                interactive: true,
                title: '<img src="styles/legend/Poblacion_LL_1.png" /> Poblacion_LL'
            });
var format_Pavimentada2022_2 = new ol.format.GeoJSON();
var features_Pavimentada2022_2 = format_Pavimentada2022_2.readFeatures(json_Pavimentada2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pavimentada2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pavimentada2022_2.addFeatures(features_Pavimentada2022_2);
var lyr_Pavimentada2022_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pavimentada2022_2, 
                style: style_Pavimentada2022_2,
                interactive: true,
                title: '<img src="styles/legend/Pavimentada2022_2.png" /> Pavimentada2022'
            });
var format_Terraceria2022_3 = new ol.format.GeoJSON();
var features_Terraceria2022_3 = format_Terraceria2022_3.readFeatures(json_Terraceria2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terraceria2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terraceria2022_3.addFeatures(features_Terraceria2022_3);
var lyr_Terraceria2022_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Terraceria2022_3, 
                style: style_Terraceria2022_3,
                interactive: true,
                title: '<img src="styles/legend/Terraceria2022_3.png" /> Terraceria2022'
            });
var format_DGC2022_4 = new ol.format.GeoJSON();
var features_DGC2022_4 = format_DGC2022_4.readFeatures(json_DGC2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGC2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGC2022_4.addFeatures(features_DGC2022_4);
var lyr_DGC2022_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DGC2022_4, 
                style: style_DGC2022_4,
                interactive: true,
                title: '<img src="styles/legend/DGC2022_4.png" /> DGC2022'
            });
var format_FSS2022_5 = new ol.format.GeoJSON();
var features_FSS2022_5 = format_FSS2022_5.readFeatures(json_FSS2022_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FSS2022_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FSS2022_5.addFeatures(features_FSS2022_5);
var lyr_FSS2022_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FSS2022_5, 
                style: style_FSS2022_5,
                interactive: true,
                title: '<img src="styles/legend/FSS2022_5.png" /> FSS2022'
            });
var format_SiboloBlock2021_6 = new ol.format.GeoJSON();
var features_SiboloBlock2021_6 = format_SiboloBlock2021_6.readFeatures(json_SiboloBlock2021_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiboloBlock2021_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiboloBlock2021_6.addFeatures(features_SiboloBlock2021_6);
var lyr_SiboloBlock2021_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SiboloBlock2021_6, 
                style: style_SiboloBlock2021_6,
                interactive: true,
                title: 'SiboloBlock2021'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Poblacion_LL_1.setVisible(true);lyr_Pavimentada2022_2.setVisible(true);lyr_Terraceria2022_3.setVisible(true);lyr_DGC2022_4.setVisible(true);lyr_FSS2022_5.setVisible(true);lyr_SiboloBlock2021_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Poblacion_LL_1,lyr_Pavimentada2022_2,lyr_Terraceria2022_3,lyr_DGC2022_4,lyr_FSS2022_5,lyr_SiboloBlock2021_6];
lyr_Poblacion_LL_1.set('fieldAliases', {'codigo': 'codigo', 'cod_censo': 'cod_censo', 'departamen': 'departamen', 'municipio': 'municipio', 'lugar_pobl': 'lugar_pobl', 'categoria': 'categoria', });
lyr_Pavimentada2022_2.set('fieldAliases', {'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'BACHEO2022': 'BACHEO2022', 'NOG_BACHEO': 'NOG_BACHEO', 'LIMPIEZA20': 'LIMPIEZA20', 'NOG_LIMPIE': 'NOG_LIMPIE', 'SUPER2022': 'SUPER2022', 'NOG_SUPER': 'NOG_SUPER', 'GUATECOMPR': 'GUATECOMPR', 'GUATECOMP1': 'GUATECOMP1', 'GUATECOMP2': 'GUATECOMP2', 'DESCARGAR_': 'DESCARGAR_', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', });
lyr_Terraceria2022_3.set('fieldAliases', {'FeatId1': 'FeatId1', 'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'TERRACERIA': 'TERRACERIA', 'NOG_TERRA': 'NOG_TERRA', 'SUPER2021': 'SUPER2021', 'NOG_SUPER': 'NOG_SUPER', 'GUATECOMPR': 'GUATECOMPR', 'GUATECOMP1': 'GUATECOMP1', 'DESCARGAR_': 'DESCARGAR_', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'UBG': 'UBG', });
lyr_DGC2022_4.set('fieldAliases', {'FeatId1': 'FeatId1', 'RUTA': 'RUTA', 'PROYECTO_D': 'PROYECTO_D', 'EMPRESA_DG': 'EMPRESA_DG', 'CONTRATO_O': 'CONTRATO_O', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'NOG_DGC': 'NOG_DGC', 'GUATECOMPR': 'GUATECOMPR', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', '_ACTA_DE_R': '_ACTA_DE_R', });
lyr_FSS2022_5.set('fieldAliases', {'FeatId1': 'FeatId1', 'RUTA': 'RUTA', 'DESCRIPCIO': 'DESCRIPCIO', 'LONGITUD': 'LONGITUD', 'LIMPIEZA': 'LIMPIEZA', 'EMPRESA_LI': 'EMPRESA_LI', 'SUPERVISIO': 'SUPERVISIO', 'NOMBRE_SUP': 'NOMBRE_SUP', 'TELEFONO_S': 'TELEFONO_S', 'NOG_LIMPIE': 'NOG_LIMPIE', 'NOG_SUPER': 'NOG_SUPER', 'GUATECOM_L': 'GUATECOM_L', 'GUATECOM_S': 'GUATECOM_S', 'SNIP_FSS': 'SNIP_FSS', 'COMUNIDAD': 'COMUNIDAD', 'PROYECTO_F': 'PROYECTO_F', 'DOCUMENTO': 'DOCUMENTO', 'EMPRESA_FS': 'EMPRESA_FS', 'NOG_FSS': 'NOG_FSS', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', });
lyr_SiboloBlock2021_6.set('fieldAliases', {'Name': 'Name', 'Position X': 'Position X', 'Position Y': 'Position Y', 'CA': 'CA', 'RD': 'RD', 'RN': 'RN', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_Poblacion_LL_1.set('fieldImages', {'codigo': 'TextEdit', 'cod_censo': 'TextEdit', 'departamen': 'TextEdit', 'municipio': 'TextEdit', 'lugar_pobl': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Pavimentada2022_2.set('fieldImages', {'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'BACHEO2022': 'TextEdit', 'NOG_BACHEO': 'TextEdit', 'LIMPIEZA20': 'TextEdit', 'NOG_LIMPIE': 'TextEdit', 'SUPER2022': 'TextEdit', 'NOG_SUPER': 'TextEdit', 'GUATECOMPR': 'TextEdit', 'GUATECOMP1': 'TextEdit', 'GUATECOMP2': 'TextEdit', 'DESCARGAR_': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', });
lyr_Terraceria2022_3.set('fieldImages', {'FeatId1': 'TextEdit', 'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'TERRACERIA': 'TextEdit', 'NOG_TERRA': 'TextEdit', 'SUPER2021': 'TextEdit', 'NOG_SUPER': 'TextEdit', 'GUATECOMPR': 'TextEdit', 'GUATECOMP1': 'TextEdit', 'DESCARGAR_': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UBG': 'TextEdit', });
lyr_DGC2022_4.set('fieldImages', {'FeatId1': '', 'RUTA': 'TextEdit', 'PROYECTO_D': 'TextEdit', 'EMPRESA_DG': 'TextEdit', 'CONTRATO_O': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'NOG_DGC': 'TextEdit', 'GUATECOMPR': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', '_ACTA_DE_R': 'TextEdit', });
lyr_FSS2022_5.set('fieldImages', {'FeatId1': '', 'RUTA': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'LONGITUD': 'TextEdit', 'LIMPIEZA': 'TextEdit', 'EMPRESA_LI': 'TextEdit', 'SUPERVISIO': 'TextEdit', 'NOMBRE_SUP': 'TextEdit', 'TELEFONO_S': 'TextEdit', 'NOG_LIMPIE': 'TextEdit', 'NOG_SUPER': 'TextEdit', 'GUATECOM_L': 'TextEdit', 'GUATECOM_S': 'TextEdit', 'SNIP_FSS': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'PROYECTO_F': 'TextEdit', 'DOCUMENTO': 'TextEdit', 'EMPRESA_FS': 'TextEdit', 'NOG_FSS': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_SiboloBlock2021_6.set('fieldImages', {'Name': 'TextEdit', 'Position X': 'TextEdit', 'Position Y': 'TextEdit', 'CA': 'TextEdit', 'RD': 'TextEdit', 'RN': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_Poblacion_LL_1.set('fieldLabels', {'codigo': 'no label', 'cod_censo': 'no label', 'departamen': 'no label', 'municipio': 'no label', 'lugar_pobl': 'no label', 'categoria': 'no label', });
lyr_Pavimentada2022_2.set('fieldLabels', {'RUTA': 'no label', 'DESCRIPCIO': 'no label', 'LONGITUD': 'no label', 'BACHEO2022': 'no label', 'NOG_BACHEO': 'no label', 'LIMPIEZA20': 'no label', 'NOG_LIMPIE': 'no label', 'SUPER2022': 'no label', 'NOG_SUPER': 'no label', 'GUATECOMPR': 'no label', 'GUATECOMP1': 'no label', 'GUATECOMP2': 'no label', 'DESCARGAR_': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'UBG': 'no label', });
lyr_Terraceria2022_3.set('fieldLabels', {'FeatId1': 'no label', 'RUTA': 'no label', 'DESCRIPCIO': 'no label', 'LONGITUD': 'no label', 'TERRACERIA': 'no label', 'NOG_TERRA': 'no label', 'SUPER2021': 'no label', 'NOG_SUPER': 'no label', 'GUATECOMPR': 'no label', 'GUATECOMP1': 'no label', 'DESCARGAR_': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'UBG': 'no label', });
lyr_DGC2022_4.set('fieldLabels', {'FeatId1': 'no label', 'RUTA': 'no label', 'PROYECTO_D': 'no label', 'EMPRESA_DG': 'no label', 'CONTRATO_O': 'no label', 'DESCRIPCIO': 'no label', 'LONGITUD': 'no label', 'NOG_DGC': 'no label', 'GUATECOMPR': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', '_ACTA_DE_R': 'no label', });
lyr_FSS2022_5.set('fieldLabels', {'FeatId1': 'no label', 'RUTA': 'no label', 'DESCRIPCIO': 'no label', 'LONGITUD': 'no label', 'LIMPIEZA': 'no label', 'EMPRESA_LI': 'no label', 'SUPERVISIO': 'no label', 'NOMBRE_SUP': 'no label', 'TELEFONO_S': 'no label', 'NOG_LIMPIE': 'no label', 'NOG_SUPER': 'no label', 'GUATECOM_L': 'no label', 'GUATECOM_S': 'no label', 'SNIP_FSS': 'no label', 'COMUNIDAD': 'no label', 'PROYECTO_F': 'no label', 'DOCUMENTO': 'no label', 'EMPRESA_FS': 'no label', 'NOG_FSS': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', });
lyr_SiboloBlock2021_6.set('fieldLabels', {'Name': 'no label', 'Position X': 'no label', 'Position Y': 'no label', 'CA': 'no label', 'RD': 'no label', 'RN': 'no label', 'DESCRIPCIO': 'no label', });
lyr_SiboloBlock2021_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});