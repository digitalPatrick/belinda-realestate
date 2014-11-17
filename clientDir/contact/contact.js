(function () { 

    'use strict';

    angular.module('app.contact')
    .controller('contactCtrl', contactCtrl);
    
    contactCtrl.$inject = ['angularLoad'];

    function contactCtrl(angularLoad) {
    
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
        
        angularLoad.loadScript('javascripts/scripts.js')
    };

}());