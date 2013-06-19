'use strict';

angular.module('ngResourceHackApp')
  .controller('MainCtrl', function ($scope, projects, project, Project) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projects = projects;

    $scope.project = project;

    $scope.save = function () {
      $scope.project.$saveOrUpdate().then(function () {
        $scope.projects = Project.all();
      });
    }
  });
