(function () {
 'use strict';   
    
    angular.module('app.core', [
       'ngRoute',
        'ngSanitize',
        'ngResource',
        'ngMessages',
        'angularLoad',
        'ui.bootstrap',
        'google-maps'.ns(),

        'blocks.exception',
        'blocks.logger'
    ]);
})();