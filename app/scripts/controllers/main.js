'use strict';

angular.module('ngResourceHackApp')
  .controller('MainCtrl', function ($scope, project) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // $scope.project = project;
    // $scope.project = {
    // 	name: "First project"
    // };
    $scope.project = project;
  });
