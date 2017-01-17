(function (){
     'use strict'
 
 angular.module('app', ['ngRoute']);
 angular.module('app')
 .config(['$routeProvider', '$locationProvider',
 function($routeProvider, $locationProvider){
 
 $routeProvider
 .when('/about', {
     templateUrl: 'app/about/index.html'
 })
 .when('/', {
     templateUrl: 'app/home/index.html'
 })
 .otherwise({
     redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
 }
    ])
 })();