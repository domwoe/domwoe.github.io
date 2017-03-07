$(document).ready(function() {

    $("#scheckheft").click(function() {
        // new Custombox.modal({
        //     content: {
        //         effect: 'fadein',
        //         target: '#modal'
        //     }
        // }).open();
        $('#scheckmodal')
            .modal('show');
    });

    $("#certificar").click(function() {
        // new Custombox.modal({
        //     content: {
        //         effect: 'fadein',
        //         target: '#modal'
        //     }
        // }).open();
        $('#certificarmodal')
            .modal('show');

            $.get('odometer.csv', function(csv) {

            Highcharts.chart('odometer', {
            chart: {
                type: 'areaspline'
            },
            title: {
              text: ""
            },
            data: {
              csv: csv
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 1
                },
                series: {
                    marker: {
                        enabled: false
                    }
               }
           },
           yAxis: { //--- Primary yAxis
               title: {
                   text: 'Kilomterstand'
               }
           },
           labels: {
             useHTML: true,
                 formatter: function() {
                   console.log(this.value);
                     if(this.value == "Jun")
                         return '<img src="http://www.highcharts.com/demo/gfx/sun.png" style="width: 30px; vertical-align: middle" />'+this.value;
                     else if(this.value == "Dec")
                          return '<img src="http://www.highcharts.com/demo/gfx/snow.png" style="width: 30px; vertical-align: middle" />'+this.value;
                     else
                         return this.value;
                 }
},
           legend: {
             enabled: false
           },
    //        labels: {
    //         formatter: function() {
    //             return '<img src="http://highcharts.com/demo/gfx/sun.png" alt="" style="vertical-align: middle; width: 32px; height: 32px"/>';
    //         },
    //         useHTML: true
    //     }
    // },
           series: [{
               type: 'areaspline',
               color: '#1fa8b0'
   }]
        });
      });
    });

    //     var annotations = new Array;
    //
    //     var begin = new Date("2016-02-01");
    //     var end = new Date("2017-03-16");
    //
    //     var date = new Date("2016-02-01");
    //     var now = new Date();
    //     while (date.getTime() < now.getTime()) {
    //
    //         if (date.getMonth() == 11) {
    //
    //             date.setFullYear(date.getFullYear() + 1);
    //             date.setMonth(0);
    //         } else {
    //             date.setMonth(date.getMonth() + 1);
    //         }
    //
    //         var mm = date.getMonth() + 1;
    //         if (mm < 10) {
    //             var mms = "0" + mm;
    //         } else {
    //             var mms = mm.toString();
    //         }
    //
    //         var yyyy = date.getFullYear();
    //         annotations.push({
    //             series: "Odometer",
    //             x: yyyy + "-" + mms + "-01",
    //             icon: "haken.png",
    //             width: 20,
    //             height: 20,
    //             tickHeight: 0
    //         });
    //     }
    //
    //
    //     var g = new Dygraph(document.getElementById('odometer'), "odometer.txt", {
    //         drawPoints: false,
    //         showRoller: false,
    //         valueRange: [0.0, 15000],
    //         axes: {
    //             y: {
    //                 drawAxis: true,
    //                 drawGrid: false
    //             },
    //             x: {
    //                 drawGrid: false
    //             }
    //         },
    //         showLabelsOnHighlight: false
    //     });
    //
    //     g.ready(function() {
    //
    //
    //         g.setAnnotations(annotations);
    //
    //
    //
    //
    //
    //     });
    // });






});
