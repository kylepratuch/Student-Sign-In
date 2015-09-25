
var attendance = angular.module('attendance', ['ui.router']);

attendance.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url:"",
    templateUrl:"partials/home.html"
  });

  $stateProvider.state('students', {
    url:"students",
    templateUrl:"partials/students.html"
  });

});
