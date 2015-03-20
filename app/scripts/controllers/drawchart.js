'use strict';

angular.module('utilityApp')
  .controller('DrawChartCtrl', [
    '$rootScope', 
    '$scope',
    'drawchart',
    function (
      $rootScope, 
      $scope,
      drawchart
    ) {
      console.log('draw chart');
      $scope.valuePoints = ['', '', '', '', ''];
      $scope.drawChart = function (formChart, data) {
        console.log(data);
        $scope.chart = drawchart.lineChart(data);
        console.log(drawchart.lineChart(data));
      };
    }
  ]);