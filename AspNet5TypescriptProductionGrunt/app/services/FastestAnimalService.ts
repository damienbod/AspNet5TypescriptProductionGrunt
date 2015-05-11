module demo
{
    'use strict';

    export class FastestAnimalService
    {
        constructor(private $http: any, private $log: any)
        {
            this.$log.info("FastestAnimalService called");
        }

        public getAnimals()
        {
            this.$log.info("FastestAnimalService getAnimals called");
            return this.$http.get("/api/FastestAnimal")
                .then(function (response) {
                return response.data;
            });
        }

        public getAnimal(animalId: any)
        {
            this.$log.info("FastestAnimalService getAnimal called: " + animalId);
            this.$log.info(animalId);
            return this.$http.get("/api/FastestAnimal/" + animalId.animalId)
                .then(function (response) {
                return response.data;
            });
        }
    }

    var module = angular.module('myapp');

    // this code can be used with uglify
    module.service("FastestAnimalService", [ "$http", "$log", FastestAnimalService]);
}
