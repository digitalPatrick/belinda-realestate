(function () {
    'use strict';

    angular.module('app.agent')
    .controller('agentCtrl', agentCtrl);

    agentCtrl.$injectt = ['angularLoad', 'dataservice', '$routeParams'];

    function agentCtrl (angularLoad, dataservice, $routeParams ){
        var vm = this;

        vm.username = ($routeParams.agentuserName);


        /**load scripts and css here **/
        angularLoad.loadScript('javascripts/scripts.js')
    };

}());
