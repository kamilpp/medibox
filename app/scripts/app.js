'use strict';

angular.module('ngResourceHackApp', ['mongolabResourceHttp'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          projects: function(Project) {
            return Project.all();
          },
          Project: function (Project) {
            return Project;
          } 
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('MONGOLAB_CONFIG',{API_KEY:'cejoG5JioOL4V411LBCZVtP21ND7wNDz', DB_NAME:'names'})
  .factory('Project', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('projects');
  });
