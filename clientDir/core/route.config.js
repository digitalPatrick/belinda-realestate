/**
 * Created by Leon on 10/15/2014.
 * All Routing information goes in this file
 */
(function () {
    'user strict';

    angular.module('app.core')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
       
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        })
            .when('/contact', {
                templateUrl: 'contact/contact.html',
                controller: 'contactCtrl as vm'
            })
            .when('/services', {
                templateUrl: 'singleview/services.html',
                controller: 'viewCtrl as vm'
            })
            .when('/terms', {
                templateUrl: 'singleview//terms.html',
                controller: 'viewCtrl as vm'
            })
             .when('/agent/:agentuserName', {
                 templateUrl: 'agentLandingPage/agent.html',
                 controller: 'agentCtrl'
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
            }).when('/test', {
                templateUrl: 'home/test.html',
                controller: 'homeCtrl'
            });
       
        $routeProvider.otherwise({redirectTo: '/'});
       
    }]).run(['$rootScope', '$location', function($rootScope, $location){
        var path = function() { return $location.path();};
        $rootScope.$watch(path, function(newVal, oldVal){
            $rootScope.activetab = newVal;
        });

    }]);


}());