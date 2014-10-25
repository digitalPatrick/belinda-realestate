(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['angularLoad', 'dataservice', 'logger', '$q'];

    function homeCtrl(angularLoad, dataservice, logger, $q) {

        /*jshint validthis: true */
        var vm = this;
        vm.featuredAgents = [];
        vm.latestApartments = [];

        activate();

        function activate() {
//            Using a resolver on all routes or dataservice.ready in every controller
                var promises = [getFeaturedAgents(), getLatestApartments()];
            return dataservice.ready(promises).then(function(){
            //return $q.all(promises).then(function() {
                logger.info('Activated data View');
            });
        }

        function getFeaturedAgents() {
            return dataservice.getFeaturedAgents().then(function(data) {
                vm.featuredAgents = data;
                return vm.featuredAgents;
            });
        }

        function getLatestApartments() {
            return dataservice.getLatestApartments().then(function(data) {
                vm.latestApartments = data;
                return vm.latestApartments;
            });
        }

        /** load scripts and css here **/
        angularLoad.loadScript('javascripts/scripts.js')
    }
})();

