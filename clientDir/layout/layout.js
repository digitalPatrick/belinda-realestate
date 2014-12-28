(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('layoutCtrl', layoutCtrl);

    layoutCtrl.$inject = ['$scope', '$location'];

    function layoutCtrl($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    };

})();

