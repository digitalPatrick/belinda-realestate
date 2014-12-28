(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['angularLoad', 'logger', 'dataservice', 'Azureservice', '$scope'];

    function homeCtrl(angularLoad, logger, dataservice, Azureservice, $scope) {
        var vm = this;
        vm.featuredAgents = [];
        $scope.featuredAgents = null;
        $scope.latestApartments = [];

        
        activate();

        if ($scope.featuredAgents) {
            logger.info('Data Already Loaded');
        }
        else {
            getAgents();
        }

        function activate() {
//            Using a resolver on all routes or dataservice.ready in every controller
            var promises = [getLatestApartments()];
            return dataservice.ready(promises).then(function(){
            //return $q.all(promises).then(function () {
                logger.info('Activated data View');
            });
           }

        function getAgents() {
            Azureservice.query('person', {})
               .then(function (item) {
                       $scope.featuredAgents = item;                   
                   console.log($scope.featuredAgents);
               }), function (err) {
                   logger.info('There was an error quering Azure ' + err)
               }
        }

            

        function getLatestApartments() {
            return Azureservice.query('apartment', { take: 4 })
                .then(function (item) {
                    $scope.latestApartments = item;
                    console.log($scope.latestApartments);
                }), function (err) {
                    logger.info('There was an error quering Azure ' + err)
                }
        }

       
        /**load scripts and css here **/
        angularLoad.loadScript('javascripts/scripts.js');


    }      
})();

