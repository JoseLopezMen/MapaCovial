var size = 0;
var placement = 'point';

var style_Kilometraje_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#000000";
    var bufferWidth = 0;
    var textAlign = "center";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Visible") !== null) {
        labelText = String(feature.get("Visible"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [900, 800],
                  scale: 0.08206896551724138,
                  anchor: [50, 500],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/KILOMETRAJE 3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
