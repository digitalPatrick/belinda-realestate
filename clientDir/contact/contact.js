(function () { 

    'use strict';

    angular.module('app.contact')
    .controller('contactCtrl', contactCtrl);
    
    contactCtrl.$inject = ['angularLoad', 'logger', 'GoogleMapApi'.ns()];

    function contactCtrl(angularLoad, logger, GoogleMapApi) {
    
        var vm = this;
        vm.lat = 28.046325;
        vm.long = -82.43074;
        vm.name = 'leon';
        vm.map = { center: { latitude: vm.lat, longitude: vm.long }, zoom: 15 };
        vm.options = { scrollwheel: false };
        vm.marker = {
            id: 0,
            coords: {
                latitude: vm.lat, 
                longitude: vm.long
            }
        };
        
        vm.sumitted = false;
        vm.submit = function() {
            vm.submitted = true;
        };
        
        vm.interacted = function (field) {
            return vm.submitted || field.$dirty;
        };
        
        GoogleMapApi.then(function(maps) {
            logger.info('Maps Loaded');
        });

        angularLoad.loadScript('javascripts/scripts.js')
    }

}());