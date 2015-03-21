// 'use strict';

angular.module('utilityApp')
  .controller('DrawMultiChartCtrl', [
    '$rootScope', 
    '$scope',
    'drawchart',
    function (
      $rootScope, 
      $scope,
      drawchart
    ) {
      $rootScope.parentPage = 'utility';
      $scope.dataCharts = [[40,25,67,15,56], [11,22,3,44,25], [15,26,23,24,55]];
      
      $scope.drawCharts = function () {
        $scope.charts = drawchart.lineChart($scope.dataCharts); 
      };

      $scope.drawCharts();
    }
  ]);