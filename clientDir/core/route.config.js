/**
 * Created by Leon on 10/15/2014.
 * All Routing information goes in this file
 */
(function () {
    'user strict';

   angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

       $locationProvider.html5Mode(true);
       
       $routeProvider.when('/', {
           templateUrl: 'home/home.html',
           controller: 'homeCtrl as vm'
           })
       .when('/project', {
           
       });
       
       $routeProvider.otherwise({redirectTo: '/'});
       
   }]);
}());