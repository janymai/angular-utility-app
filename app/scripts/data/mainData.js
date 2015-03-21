'use strict';

angular.module('utilityApp')
  .constant ('homeContents', [
    {
      title: 'Draw Chart',
      href: 'drawchart',
      detail: 'This is an example about drawchart, with input are points to draw and output will be a chart.'
    },
    {
      title: 'Draw multi chart',
      href: 'drawMultiChart',
      detail: 'This is an example about drawchart, with input are array contain maps point and output will be show more chart'
    }
  ]);