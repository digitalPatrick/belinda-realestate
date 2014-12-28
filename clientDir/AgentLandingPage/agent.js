(function () {
    'use strict';

    angular.module('app.agent')
    .controller('agentCtrl', agentCtrl);

    agentCtrl.$injectt = ['angularLoad', '$routeParams', '$scope', 'Azureservice'];

    function agentCtrl (angularLoad, $routeParams, $scope, Azureservice ){
        //var vm = this;

        $scope.profile = [];
        $scope.agentName = ($routeParams.agentuserName);
        $scope.totalApartments = 40;
        $scope.pageSize = 9; // this should match however many results your API puts on one page
        getResultsPage(0); // start on the first page

        //$scope.pagination = {
        //    current: 0
        //};

        $scope.pageChanged = function (newPage) {
            getResultsPage(newPage);
        };

        function getResultsPage(pageNumber) {
            Azureservice.invokeApi('customprofile', {
                method: 'get',
                parameters: {
                    username: $scope.agentName,
                    pageIndex: pageNumber,
                    pageSize: $scope.pageSize
                }
            })
           .then(function (response) {
               console.log('Here is my response object'); // remove in production
               console.log(response); // remove in production
               $scope.profile = response;
           }, function (err) {
               console.error('Azure Error: ' + err);
           });

        }


        /**load scripts and css here **/
        angularLoad.loadScript('javascripts/scripts.js');
}

}());
