var size = 0;
var placement = 'point';
function categories_PCI2020_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Bueno':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,157,108,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Excelente':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(251,138,87,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Malo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,106,53,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 15}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Muy Bueno':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(251,73,25,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Muy Malo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,41,9,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 20}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reconstruccion':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(176,23,19,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 30}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Regular':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(142,14,18,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 10}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PCI2020_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CLASIFICAC");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("CLASIFICAC") !== null) {
        labelText = String(feature.get("CLASIFICAC"));
    }
    
var style = categories_PCI2020_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
