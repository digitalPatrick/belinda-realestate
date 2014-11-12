(function (){
    
    'use strict'
    
    angular
    .module('app.singleview')
    .controller('viewCtrl', viewCtrl);
    
    viewCtrl.$inject = ['angularLoad'];
    
    function viewCtrl(angularLoad) {
        
     var vm = this;   
        
        vm.name = 'leon';
        angularLoad.loadScript('javascripts/scripts.js')
    }
    
})();