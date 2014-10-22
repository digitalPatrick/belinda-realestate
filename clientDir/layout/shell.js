(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = [];

    function Shell() {
        /*jshint validthis: true */
        var vm = this;
        

        vm.title = 'home page';
        
    }
})();

