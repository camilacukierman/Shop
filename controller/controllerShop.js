/**
 * Created by itc_user on 7/19/2016.
 */



(function () {
    'use strict';
    localStorage.removeItem("products")
    var app = angular.module('myApp');
    app.controller('controllerShop',function ($scope, factoryShop , $routeParams) {
        $scope.products=  [];
        $scope.cart = [];

        angular.element(document).ready(function(){
            getProducts();
        });



        if (localStorage.getItem("products")){
            $scope.products = JSON.parse(localStorage.getItem("products"));
        }

        if (localStorage.getItem("cart")){
            $scope.products = JSON.parse(localStorage.getItem("cart"));
        }

        $scope.addToCart = function(product){
            $scope.cart.push(product);
            localStorage.setItem("cart",JSON.stringify($scope.cart));
        }

        function getProducts() {
            factoryShop.getProducts().then(function (data) {
               $scope.products = data ;
                localStorage.setItem("products",JSON.stringify($scope.products));
            });
        }
        $scope.chosenProduct =  $scope.products.filter(function(item){
            return item.id==$routeParams.id;
        })[0];




    });
})();


