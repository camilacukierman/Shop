/**
 * Created by itc_user on 7/19/2016.
 */



(function () {
    'use strict';
    localStorage.removeItem("products");

    var app = angular.module('myApp');
    app.controller('controllerShop', function ($scope, factoryShop, $routeParams) {
        $scope.products = [];
        $scope.cart = [];
        $scope.counter = 0;
        angular.element(document).ready(function () {
            getProducts();
        });

        if (localStorage.getItem("products")) {
            $scope.products = JSON.parse(localStorage.getItem("products"));
        }

        if (localStorage.getItem("cart")) {
            $scope.cart = JSON.parse(localStorage.getItem("cart"));
        }

        $scope.addToCart = function (product) {
            if ($scope.counter > 0){
            var selectedProduct = $scope.products.filter(function (item) {
                return item.id == product;
            })[0];
            selectedProduct.quantity =  $scope.counter;

            $scope.cart.push(selectedProduct);
            localStorage.setItem("cart", JSON.stringify($scope.cart));
            location.hash = "/gotoCart"
            }else{
                location.hash = "/";
            }
        };

        $scope.increaseCounter = function (){
            $scope.counter++;
        }

        $scope.decreaseCounter = function (){
            $scope.counter--;
        }


        function getProducts() {
            factoryShop.getProducts().then(function (data) {
                $scope.products = data;
                localStorage.setItem("products", JSON.stringify($scope.products));
            });
        }

        $scope.chosenProduct = $scope.products.filter(function (item) {
            return item.id == $routeParams.id;
        })[0];


    });
})();


