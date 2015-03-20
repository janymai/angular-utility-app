'use strict';

angular.module('utilityApp')
  .controller('DrawMultiChartCtrl', [
    '$rootScope',
    '$scope',
    function (
      $scope,
      $rootScope
    ) {
      $rootScope.parentPage = 'utility';
      
    }
  ]);