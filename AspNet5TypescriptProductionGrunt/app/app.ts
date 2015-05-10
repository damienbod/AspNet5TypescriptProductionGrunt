/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module App {
    'use strict';

    var app = angular.module('myapp', [
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',

    ]);

    app.config(["$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => {
        {
            $urlRouterProvider.otherwise("/index");

        }
    }
    ]);

    app.run(["$rootScope", $rootScope => {
        $rootScope.$on('$stateChangeStart',(event, toState, toParams, fromState, fromParams) => {
            console.log(event);
            console.log(toState);
            console.log(fromState);
            console.log(fromParams);
        });

        $rootScope.$on('stateChangeSuccess',(event, toState, toParams, fromState, fromParams) => {
            console.log(event);
            console.log(toState);
            console.log(fromState);
            console.log(fromParams);
        });

        $rootScope.$on('$stateNotFound',(event, unfoundState, fromState, fromParams) => {
            console.log(event);
            console.log(unfoundState);
            console.log(fromState);
            console.log(fromParams);
        });

        $rootScope.$on('$stateChangeError',(event, toState, toParams, fromState, fromParams, error) => {
            console.log(event);
            console.log(toState);
            console.log(toParams);
            console.log(fromState);
            console.log(fromParams);
            console.log(error);
        });

        $rootScope.$on('$viewContentLoaded', event => {
            console.log("$viewContentLoaded event");
        });

    }]);


};