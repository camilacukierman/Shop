/**
 * Created by itc_user on 7/19/2016.
 */



(function () {
    'use strict';
    var app = angular.module('myApp');
    app.controller('controllerShop',function ($scope, factoryShop ) {
        $scope.products=factoryShop.getProducts();

    });
})();
