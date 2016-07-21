/**
 * Created by itc_user on 7/19/2016.
 */



(function () {
    'use strict';
    var app = angular.module('myApp');
    app.controller('controllerShop',function ($scope, factoryShop , $routeParams) {
        $scope.products=factoryShop.getProducts();
        
        $scope.chosenProduct =  $scope.products.filter(function(item){
            return item.id==$routeParams.id;
        })[0];

        $scope.toBuyProduct =  $scope.products.filter(function(item){
            return item.id==$routeParams.id;
        })[0];

    });
})();
