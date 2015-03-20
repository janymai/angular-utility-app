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
      $scope.valuePoints = ['', '', '', '', ''];

      $scope.drawChart = function (formChart, data) {
        var data = [[1,3,4,5,6], [1,2,3,4,5]];
        $scope.charts = drawchart.lineChart(data);
        // console.log($scope.chart);
      };
    }
  ]);