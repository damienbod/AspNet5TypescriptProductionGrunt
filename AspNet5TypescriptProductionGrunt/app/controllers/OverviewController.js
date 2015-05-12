var demo;
(function (demo) {
    'use strict';
    var OverviewController = (function () {
        function OverviewController(scope, log, fastestAnimals) {
            scope.Vm = this;
            this.log = log;
            this.Message = "Overview";
            this.log.info("OverviewController called");
            this.Animals = fastestAnimals;
        }
        return OverviewController;
    })();
    demo.OverviewController = OverviewController;
    var app = angular.module('myapp');
    app.controller('OverviewController', ["$scope", "$log", "fastestAnimals", OverviewController]);
})(demo || (demo = {}));
;
//# sourceMappingURL=OverviewController.js.map