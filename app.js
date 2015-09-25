
var attendance = angular.module('attendance', ['ui.router']);

attendance.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url:"",
    templateUrl:"partials/home.html"
  });

  $stateProvider.state('sign-in', {
    url:"/students",
    templateUrl:"partials/sign-in.html",
    controller:"SignInCtrl"
  });

  $stateProvider.state('roster', {
    url:"/roster",
    templateUrl:"partials/roster.html",
    controller:"SignInCtrl"
  });

});
