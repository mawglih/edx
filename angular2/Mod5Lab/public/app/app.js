 (function (){
     'use strict'
 
 angular.module('app', ['ngRoute']);
 angular.module('app')
 .config(['$routeProvider', '$locationProvider',
 function($routeProvider, $locationProvider){
 
 $routeProvider
 .when('/contactUs', {
     templateUrl: 'app/contactUs/index.html',
     controller: 'ContactUsController',
     controllerAs: 'vm'
 })
 .when('/items', {
     templateUrl: 'app/items/index.html',
     controller: 'ItemsController',
     controllerAs: 'vm'
 })
 .when('/', {
     templateUrl: 'app/home/index.html',
     controller: 'HomeController',
     controllerAs: 'vm'
 })
 .otherwise({
     redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
 }
    ])
 })();