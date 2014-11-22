(function () {
 'use strict';   
    
    angular.module('app.core', [
       'ngRoute',
        'ngSanitize',
        'ngResource',
        'ngMessages',
        'angularLoad',
        'uiGmapgoogle-maps',

        'blocks.exception',
        'blocks.logger'
    ]);
})();