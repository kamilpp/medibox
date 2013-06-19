'use strict';

angular.module('ngResourceHackApp')
  .controller('MainCtrl', function ($scope, projects, Project) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projects = Project.all();

    $scope.project = new Project();

    $scope.save = function () {
    	$scope.project.$saveOrUpdate();
			$scope.projects = Project.all();
    }
  });
