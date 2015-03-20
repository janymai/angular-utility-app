'use strict';

angular.module('utilityApp', [
  'ui.router',
  'highcharts-ng'
])
  .config(function (
    $stateProvider,
    $urlRouterProvider
  ) {
    

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/partials/home.html'
      })
      .state('aboutMe', {
        url: '/about-me',
        templateUrl: '/partials/home1.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/partials/home1.html'
      })
      .state('drawchart', {
        url: '/drawchart',
        templateUrl: '/partials/drawchart.html',
        controller: 'DrawChartCtrl'
      })
      .state('drawMultiChart', {
        url: '/drawMultiChart',
        templateUrl: '/partials/drawMultiChart.html',
        controller: 'DrawMultiChartCtrl'
      })
      .state('markdown', {
        url: '/drawchart',
        templateUrl: '/partials/home1.html'
      })
      .state('dragDrop', {
        url: '/drag-drop',
        templateUrl: '/partials/home1.html'
      });

    $urlRouterProvider.otherwise('/');
  });