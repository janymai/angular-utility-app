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
        url: '/about-me.html',
        templateUrl: '/partials/home1.html'
      })
      .state('contact', {
        url: '/contact.html',
        templateUrl: '/partials/home1.html'
      })
      .state('drawchart', {
        url: '/drawchart.html',
        templateUrl: '/partials/drawchart.html',
        controller: 'DrawChartCtrl'
      })
      .state('markdown', {
        url: '/drawchart.html',
        templateUrl: '/partials/home1.html'
      })
      .state('dragDrop', {
        url: '/drag-drop.html',
        templateUrl: '/partials/home1.html'
      });

    $urlRouterProvider.otherwise('/');
  });