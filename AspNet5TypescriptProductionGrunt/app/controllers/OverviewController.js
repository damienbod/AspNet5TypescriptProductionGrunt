(function () {
    'use strict';
    var module = angular.module("mainApp");
    module.controller("OverviewController", [
        "$scope",
        "$log",
        "fastestAnimals",
        OverviewController
    ]);
    function OverviewController($scope, $log, fastestAnimals) {
        $log.info("OverviewController called");
        $scope.message = "Overview";
        $log.info(fastestAnimals);
        $scope.animals = fastestAnimals;
    }
})();
//# sourceMappingURL=OverviewController.js.map