'use strict';

angular.module('ngResourceHackApp', ['mongolabResourceHttp'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          project: function(Project) {
            return Project.all();
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
