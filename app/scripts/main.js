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
        templateUrl: '/partials/home.html',
        controller: 'HomeCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/partials/contact.html'
      })
      .state('aboutMe', {
        url: '/aboutme',
        templateUrl: '/partials/aboutme.html'
      })
      .state('drawchart', {
        url: '/drawchart',
        templateUrl: '/partials/drawchart.html',
        controller: 'DrawChartCtrl'
      })
      .state('drawMultiChart', {
        url: '/drawMultiChart',
        templateUrl: '/partials/draw-multi-chart.html',
        controller: 'DrawMultiChartCtrl'
      })
      .state('markdown', {
        url: '/markdown',
        templateUrl: '/partials/markdown.html',
        controller: 'MarkDownCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });