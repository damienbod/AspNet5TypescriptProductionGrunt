var demo;
(function (demo) {
    'use strict';
    var DetailsController = (function () {
        function DetailsController(scope, log, fastestAnimal) {
            scope.Vm = this;
            this.log = log;
            this.Message = "Animal Details";
            this.log.info("DetailsController called");
            this.Animal = fastestAnimal;
        }
        return DetailsController;
    })();
    demo.DetailsController = DetailsController;
    var app = angular.module('myapp');
    app.controller('DetailsController', ["$scope", "$log", "fastestAnimal", DetailsController]);
})(demo || (demo = {}));
;
