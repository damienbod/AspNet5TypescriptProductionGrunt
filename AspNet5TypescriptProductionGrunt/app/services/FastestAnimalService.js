var demo;
(function (demo) {
    'use strict';
    var FastestAnimalService = (function () {
        function FastestAnimalService($http, $log) {
            this.$http = $http;
            this.$log = $log;
            this.$log.info("FastestAnimalService called");
        }
        FastestAnimalService.prototype.getAnimals = function () {
            this.$log.info("FastestAnimalService getAnimals called");
            return this.$http.get("/api/FastestAnimal").then(function (response) {
                return response.data;
            });
        };
        FastestAnimalService.prototype.getAnimal = function (animalId) {
            this.$log.info("FastestAnimalService getAnimal called: " + animalId);
            this.$log.info(animalId);
            return this.$http.get("/api/FastestAnimal/" + animalId.animalId).then(function (response) {
                return response.data;
            });
        };
        return FastestAnimalService;
    })();
    demo.FastestAnimalService = FastestAnimalService;
    var module = angular.module('myapp');
    // this code can be used with uglify
    module.service("FastestAnimalService", [
        "$http",
        "$log",
        FastestAnimalService
    ]);
})(demo || (demo = {}));
