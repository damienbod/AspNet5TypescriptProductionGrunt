module demo {
    'use strict';

    export interface IOverviewController extends ng.IScope {
        Vm: OverviewController;
    }

    export class OverviewController {

        private scope: ng.IScope;
        private log: any;

        public Animals: any;
        public Message: string;
        public Vm: IOverviewController;

        constructor(scope: any, log: any, fastestAnimals: any) {
            scope.Vm = this;
            this.log = log;
            this.Message = "Overview";
            this.log.info("OverviewController called");
            this.Animals = fastestAnimals;
        }
    }

    var app = angular.module('myapp');

    app.controller('OverviewController', ["$scope", "$log", "fastestAnimals", OverviewController]);
};