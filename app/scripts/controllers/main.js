'use strict';

angular.module('ngResourceHackApp')
  .controller('MainCtrl', function ($scope, projects, project) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projects = projects;

    $scope.project = project;

    $scope.save = function () {
    	$scope.project.$saveOrUpdate();
    }
  });
