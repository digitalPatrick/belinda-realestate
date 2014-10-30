/**
 * Created by Leon on 10/15/2014.
 * All Routing information goes in this file
 */
(function () {
    'user strict';

   angular.module('app.core').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

       $locationProvider.html5Mode(true);
       
       $routeProvider.when('/', {
           templateUrl: 'home/home.html',
           controller: 'homeCtrl',
           controllerAS: 'vm'
           })
           .when('/contact', {
               templateUrl: 'singleview/contact.html',
               controller: 'viewCtrl as vm'
           })
           .when('/services', {
                templateUrl: 'singleview/services.html',
                controller: 'viewCtrl'
           })
           .when('/terms', {
                templateUrl: 'singleview//terms.html',
                controller: 'viewCtrl'
           })
            .when('/privacy', {
                templateUrl: 'singleview//privacy.html',
                controller: 'viewCtrl'
           })
            .when('/faq', {
                templateUrl: 'singleview/faq.html',
                controller: 'viewCtrl'
            })
           .when('/agent/:userName', {
               templateUrl: 'singleview/faq.html',
               controller: 'viewCtrl'
           });
       
       $routeProvider.otherwise({redirectTo: '/'});
       
   }]);
}());