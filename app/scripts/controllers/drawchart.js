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
      $rootScope.parentPage = 'utility';
      $scope.retrySubmit = false;
      $scope.valuePoints = ['', '', '', '', ''];

      $scope.drawChart = function (formChart, data) {
        $scope.retrySubmit = true;
        if (formChart.$valid) {
          var data = data;
          var convertData = data.map(function (value) {
            var value = parseInt(value);
            return value;
          });
          var charts = [];
          charts.push(convertData);
          $scope.charts = drawchart.lineChart(charts);
        }
      };
    }
  ]);