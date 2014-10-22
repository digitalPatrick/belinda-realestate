(function (){
    
    'use strict'
    
    angular
    .module('app.singleview')
    .controller('viewCtrl', viewCtrl);
    
    viewCtrl.$inject = [];
    
    function viewCtrl() {
        
     var vm = this;   
        
        vm.name = 'leon';
    }
    
})();