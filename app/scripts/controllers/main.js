'use strict';

angular.module('ngResourceHackApp')
  .controller('MainCtrl', function ($scope, projects, project) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // $scope.project = project;
    // $scope.project = {
    // 	name: "First project"
    // };
    $scope.projects = projects;

    $scope.project = project;
    
    $scope.project['name'] = "David's supercool project";

    $scope.project.$saveOrUpdate();
  });
