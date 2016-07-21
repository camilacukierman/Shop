/**
 * Created by itc_user on 7/19/2016.
 */



(function () {
    'use strict';
    var app = angular.module('myApp');
    app.controller('controllerShop',function ($scope, factoryShop , $routeParams) {
        $scope.products=  [];
        
        angular.element(document).ready(function(){
            getProducts();
        });
        
        function getProducts() {
            factoryShop.getProducts().then(function (data) {
               $scope.products = data ;
              
            });
        } 
        
        $scope.chosenProduct =  $scope.products.filter(function(item){
            return item.id==$routeParams.id;
        })[0];


    });
})();
