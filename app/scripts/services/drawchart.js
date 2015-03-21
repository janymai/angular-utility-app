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
              color: '#333',
              marker: {
                enabled: false
              }
            }],
            loading: false,
            yAxis: {
              lineColor: '#333',
              lineWidth: 1,
              gridLineWidth: null,
              title: null
            },   
            xAxis: {
              lineColor: '#333',
              lineWidth: 1,
              tickWidth: 0
            },
            size: {
              width: '500',
              height: '350'
            }
          };
          
          charts.push(chart);
        });
        return charts;
      }
    };
  }]);