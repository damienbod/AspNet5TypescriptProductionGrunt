module demo {
    'use strict';

    export interface IDetailsController extends ng.IScope {
        Vm: DetailsController;
    }

    export class DetailsController {

        private scope: ng.IScope;
        private log: any;

        public Animal: IFastestAnimal;
        public Message: string;
        public Vm: IDetailsController;

        constructor(scope: ng.IScope, log: any, fastestAnimal: IFastestAnimal) {
            scope.Vm = this;
            this.log = log;
            this.Message = "Animal Details";
            this.log.info("DetailsController called");
            this.Animal = fastestAnimal;
        }
    }

    var app = angular.module('myapp');

    app.controller('DetailsController', ["$scope", "$log", "fastestAnimal", DetailsController]);
};


