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
           .when('/contact', {
               templateUrl: 'singleview/contact.html',
               controller: 'viewCtrl as vm'
           })
           .when('/services', {
                templateUrl: 'singleview/services.html',
                controller: 'viewCtrl as vm'
           })
           .when('/terms', {
                templateUrl: 'singleview//terms.html',
                controller: 'viewCtrl as vm'
           })
            .when('/privacy', {
                templateUrl: 'singleview//privacy.html',
                controller: 'viewCtrl as vm'
           })
            .when('/faq', {
                templateUrl: 'singleview/faq.html',
                controller: 'viewCtrl as vm'
            });
       
       $routeProvider.otherwise({redirectTo: '/'});
       
   }]);
}());