(function () {
    'use strict';
    var module = angular.module('myapp');
    module.controller('DetailsController', [
        '$scope',
        '$log',
        'fastestAnimal',
        DetailsController
    ]);
    function DetailsController($scope, $log, fastestAnimal) {
        $log.info("DetailsController called");
        $scope.message = "Animal Details";
        $scope.animal = fastestAnimal;
    }
})();
//# sourceMappingURL=DetailsController.js.map