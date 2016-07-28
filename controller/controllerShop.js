/**
 * Created by itc_user on 7/28/2016.
 */
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
            var i;
            if ($scope.counter > 0){
                var selectedProduct = $scope.products.filter(function (item) {
                return item.id == product;
            })[0];
                for(i=0; i<$scope.cart.length;i++){
                    if ($scope.cart[i].name == product){
                        $scope.cart.splice(i, 1); // Remove index i from the cart
                    }
                }
                selectedProduct.quantity =  $scope.counter;
                selectedProduct.total = Math.ceil(selectedProduct.quantity* selectedProduct.price);
            $scope.cart.push(selectedProduct);
            localStorage.setItem("cart", JSON.stringify($scope.cart));
            location.hash = "/viewCart";
            }else{
                alert("You can't add 0 products to the cart");
            }
        };

        $scope.increaseCounter = function (){
            $scope.counter++;
        };

        $scope.decreaseCounter = function (){
            if ($scope.counter > 0){
                $scope.counter--;
            }
        };


        function getProducts() {
            factoryShop.getProducts().then(function (data) {
                $scope.products = data;
                localStorage.setItem("products", JSON.stringify($scope.products));
            });
        }

        $scope.chosenProduct = $scope.products.filter(function (item) {
            return item.id == $routeParams.id;
        })[0];

        $scope.FinnishAndPay= function (){
            localStorage.removeItem("cart");
            localStorage.removeItem("products");
            alert("PAYING");
            location.hash = "/viewCart#"+Math.floor((Math.random() * 10) + 1); //Put random number so we can refresh the page
            window.scrollTo(0, 0); //Scroll to top

        }
    });
})();