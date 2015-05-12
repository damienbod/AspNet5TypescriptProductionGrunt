/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module demo {
    'use strict';

    var demoapp = angular.module('myapp', [
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',

    ]);

    demoapp.config(["$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => {

        $urlRouterProvider.otherwise("/home/overview");

        $stateProvider
            .state("home", { abstract: true, url: "/home", templateUrl: "/templates/home.html" })
            .state("overview", {
            parent: "home", url: "/overview", templateUrl: "/templates/overview.html", controller: "OverviewController",
            resolve: {

                FastestAnimalService: "FastestAnimalService",

                fastestAnimals: ["FastestAnimalService", (FastestAnimalService) => {
                    return FastestAnimalService.getAnimals();
                }]
            }
        })
        .state("details", {
            parent: "overview", url: "/details/:animalId", templateUrl: "/templates/details.html", controller: "DetailsController",
            resolve: {
                FastestAnimalService: "FastestAnimalService",

                fastestAnimal: ["FastestAnimalService", "$stateParams", (FastestAnimalService, $stateParams) => {
                    var animalId = $stateParams.animalId;
                    console.log($stateParams.animalId);
                    return FastestAnimalService.getAnimal({ animalId: animalId });
                }]
            }
        })
    }
    ]);

    //demoapp.run(["$rootScope", $rootScope => {
    //    $rootScope.$on('$stateChangeStart',(event, toState, toParams, fromState, fromParams) => {
    //        console.log(event);
    //        console.log(toState);
    //        console.log(fromState);
    //        console.log(fromParams);
    //    });

    //    $rootScope.$on('stateChangeSuccess',(event, toState, toParams, fromState, fromParams) => {
    //        console.log(event);
    //        console.log(toState);
    //        console.log(fromState);
    //        console.log(fromParams);
    //    });

    //    $rootScope.$on('$stateNotFound',(event, unfoundState, fromState, fromParams) => {
    //        console.log(event);
    //        console.log(unfoundState);
    //        console.log(fromState);
    //        console.log(fromParams);
    //    });

    //    $rootScope.$on('$stateChangeError',(event, toState, toParams, fromState, fromParams, error) => {
    //        console.log(event);
    //        console.log(toState);
    //        console.log(toParams);
    //        console.log(fromState);
    //        console.log(fromParams);
    //        console.log(error);
    //    });

    //    $rootScope.$on('$viewContentLoaded', event => {
    //        console.log("$viewContentLoaded event");
    //    });

    //}]);


};