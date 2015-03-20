'use strict';

angular.module('utilityApp')
  .factory('drawchart',[ function () {
    return {
      lineChart: function (mapSeries) {
        var chart,
            charts = [];
        var mapSeries = mapSeries;
        angular.forEach(mapSeries, function (mapSeri) {
          chart = {            
            animation: true,
            options: {
              legend: {
                enabled: false   
              }
            },
            series: [{
              data: mapSeri,
              enableMouseTracking: false,
              color: '#cacaca',
              marker: {
                enabled: false
              }
            }],
            loading: false,
            yAxis: {
              lineColor: '#cacaca',
              lineWidth: 1,
              gridLineWidth: null,
              title: null
            },   
            xAxis: {
              lineColor: '#cacaca',
              lineWidth: 1,
              tickWidth: 0
            },
            size: {
              width: '400',
              height: '300'
            }
          };
          
          charts.push(chart);
        });
        return charts;
      }
    };
  }]);