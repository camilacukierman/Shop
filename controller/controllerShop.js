/**
 * Created by itc_user on 7/19/2016.
 */


    app.controller('controllerShop', function ($scope, $http) {
        // $http.get("../jsonProducts.json")
        //     .then(function (response) {
        //         $scope.products = response.data;
        //     });
        
        $scope.products = [
            {
                "name": "Garibaldo",
                "price": "99.99",
                "image": "images/garibaldo.jpg",
                "description": "lalalalalalal lalala la"
            },
            {
                "name": "Cookieman",
                "price": "99.99",
                "image": "images/cookieman.png",
                "description": "lalalalalalal lalala la"
            },
            {
                "name": "Beto",
                "price": "99.99",
                "image": "images/beto.png",
                "description": "lalalalalalal lalala la"
            },
            {
                "name": "Elmo",
                "price": "99.99",
                "image": "images/elmo.png",
                "description": "lalalalalalal lalala la"
            }
        ]
    });
