'use strict';

angular.module('utilityApp')
  .controller('HomeCtrl', ['$scope', 'homeContents' , function ($scope, homeContents) {
    $scope.homeContents = homeContents;
  }]);