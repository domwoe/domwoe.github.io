$(document).ready(function() {

    
    $("#toggleOdometer").click(function() {

        $("#odometerContainer").toggle();

        var el = $("#toggleOdometer .opened-text")

        if (el.text() == "Einblenden") {
            el.text("Ausblenden")
        } else {
            el.text("Einblenden")
        }


        showGraph();

    });

    $("#toggleBattery").click(function() {

        $("#batteryContainer").toggle();

        var el = $("#toggleBattery .opened-text")

        if (el.text() == "Einblenden") {
            el.text("Ausblenden")
        } else {
            el.text("Einblenden")
        }

    });

    $("#toggleService").click(function() {

        $("#serviceContainer").toggle();

        var el = $("#toggleService .opened-text")

        if (el.text() == "Einblenden") {
            el.text("Ausblenden")
        } else {
            el.text("Einblenden")
        }

    });

    var annotations = new Array;

        var date = new Date("2016-02-01");
        var now = new Date();
        while (date.getTime() < now.getTime()) {

            if (date.getMonth() == 11) {

                date.setFullYear(date.getFullYear() + 1);
                date.setMonth(0);
            } else {
                date.setMonth(date.getMonth() + 1);
            }

            var mm = date.getMonth() + 1;
            if (mm < 10) {
                var mms = "0" + mm;
            } else {
                var mms = mm.toString();
            }

            var yyyy = date.getFullYear();
            annotations.push({
                series: "Odometer",
                x: yyyy + "-" + mms + "-01",
                icon: "haken.png",
                width: 20,
                height: 20,
                tickHeight: 0
            });
        }





    function showGraph() {

        

        var g = new Dygraph(document.getElementById('odometer'), "./autoscout_files/odometer.txt", {
            drawPoints: true,
            showRoller: false,
            valueRange: [0.0, 18000],
            axes: {
                y: {
                    drawAxis: false,
                    drawGrid: false,

                },
                x: {
                    drawGrid: false
                }
            },
            gridLineColor: 'rgb(200,200,200)',
            gridLineWidth: 0.2, 
            fillGraph: true,
            axisLabelFontSize: 8,
            showLabelsOnHighlight: true,
            highlightCircleSize: 0,
            strokeWidth: 1.5,
            fillAlpha: 0.8,
            color: 'rgb(70,138,201)'  
        });

        g.ready(function() {


            g.setAnnotations(annotations);





        });

    }




});