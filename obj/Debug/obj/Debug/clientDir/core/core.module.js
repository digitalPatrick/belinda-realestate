(function () {
 'use strict';   
    
    angular.module('app.core', [
       'ngRoute',
        'ngSanitize',
        'ngResource',
        'angularLoad',

        'blocks.exception',
        'blocks.logger'
    ]);
})();