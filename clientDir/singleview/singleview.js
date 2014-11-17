(function (){
    
    'use strict'
    
    angular
    .module('app.singleview', [
  
    ])
    .controller('viewCtrl', viewCtrl);
    
    viewCtrl.$inject = ['angularLoad'];

    
    function viewCtrl(angularLoad) {
        
     var vm = this;   
        
        angularLoad.loadScript('javascripts/scripts.js')
    }
    
})();