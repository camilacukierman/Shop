/**
 * Created by itc_user on 7/19/2016.
 */

(function () {
    'use strict';
    var app = angular.module('myApp', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: "./views/view1.html",
                    controller: 'controllerShop'
                })
                .when('/gotoProduct/:id', {
                    templateUrl: "./views/view2.html",
                    controller: 'controllerShop'
                })                
                .when('/gotoCart', {
                    templateUrl: "./views/view3.html", 
                    controller: 'controllerShop'
                })
                .otherwise({redirectTo: '/'});
        }]);

})();










