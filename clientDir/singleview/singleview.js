(function (){
    
    'use strict'
    
    angular
    .module('app.singleview', [
            'google-maps'.ns(),
    ])
    .controller('viewCtrl', viewCtrl);
    
    viewCtrl.$inject = ['angularLoad'];

    
    function viewCtrl(angularLoad) {
        
     var vm = this;   
        
        vm.name = 'leon';
        vm.map = { center: { latitude: 28.046325, longitude: -82.43074 }, zoom: 15 };

        angularLoad.loadScript('javascripts/scripts.js')
    }
    
})();