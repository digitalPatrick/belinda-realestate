(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$location', '$q', 'exception', 'logger'];

    function dataservice($http, $location, $q, exception, logger) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getAvengersCast: getAvengersCast,
            getAvengerCount: getAvengerCount,
            getAvengers: getAvengers,
            getFeaturedAgents: getFeaturedAgents,
            getLatestApartments: getLatestApartments,
            ready: ready
        };

        return service;

        function getAvengers() {
            return $http.get('/api/maa')
                .then(getAvengersComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getAvengers')(message);
                    $location.url('/');
                });

            function getAvengersComplete(data, status, headers, config) {
                return data.data[0].data.results;
            }
        }

        function getAvengerCount() {
            var count = 0;
            return getAvengersCast()
                .then(getAvengersCastComplete)
                .catch(exception.catcher('XHR Failed for getAvengerCount'));

            function getAvengersCastComplete (data) {
                count = data.length;
                return $q.when(count);
            }
        }

        function getAvengersCast() {
            var cast = [
                {name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man'},
                {name: 'Chris Hemsworth', character: 'Thor'},
                {name: 'Chris Evans', character: 'Steve Rogers / Captain America'},
                {name: 'Mark Ruffalo', character: 'Bruce Banner / The Hulk'},
                {name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow'},
                {name: 'Jeremy Renner', character: 'Clint Barton / Hawkeye'},
                {name: 'Gwyneth Paltrow', character: 'Pepper Potts'},
                {name: 'Samuel L. Jackson', character: 'Nick Fury'},
                {name: 'Paul Bettany', character: 'Jarvis'},
                {name: 'Tom Hiddleston', character: 'Loki'},
                {name: 'Clark Gregg', character: 'Agent Phil Coulson'}
            ];
            return $q.when(cast);
        }

        function getFeaturedAgents(){
            var featuredAgents = [
                {name: 'Belinda Anglin.', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/belinda.jpg'},
                {name: 'Leon Patrick', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/leoceo.jpg'},
                {name: 'Dianna Williams', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/diana.jpg'},
                {name: 'Mark Ruffalo', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/person1.jpg'},
                {name: 'Scarlett Johansson', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/person2.jpg'},
                {name: 'Jeremy Renner', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/catperson.jpg'},
                {name: 'Gwyneth Paltrow', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/person2.jpg'},
                {name: 'Samuel L. Jackson', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/person1.jpg'},
                {name: 'Paul Bettany', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/catperson.jpg'},
                {name: 'Tom Hiddleston', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/person2.jpg'},
                {name: 'Clark Gregg', discription: 'Best ReaEstate agent on the Planet!!', imgUrl: 'images/person1.jpg'}
            ];
            return $q.when(featuredAgents);
        }

        function getLatestApartments(){
            var latestApartment = [
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'},
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'},
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'},
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'},
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'},
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'},
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'},
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'},
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'},
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'},
                {mainImg: 'images/house1.jpg', description: 'This is the latest Apartment'}
            ];

            return $q.when(latestApartment);
        }

        function prime() {
            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success() {
                isPrimed = true;
                logger.info('Primed data');
            }
        }

        function ready(nextPromises) {
            var readyPromise = primePromise || prime();

            return readyPromise
                .then(function() { return $q.all(nextPromises); })
                .catch(exception.catcher('"ready" function failed'));
        }

    }
})();
