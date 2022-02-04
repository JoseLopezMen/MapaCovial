var size = 0;
var placement = 'point';

var style_SiboloBlock2021_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_SiboloBlock2021_6(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_SiboloBlock2021_6rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 9.0,
                  anchor: [22, 22],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/CA con fondo.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SiboloBlock2021_6rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 9.0,
                  anchor: [22, 22],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/RN CON FONDO Y TEXTO 2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_SiboloBlock2021_6rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 9.0,
                  anchor: [22, 22],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/RD CON FONDO Y TEXTO.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_SiboloBlock2021_6(feature, value);
        ;

    return style;
};
