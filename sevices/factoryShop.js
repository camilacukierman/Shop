/**
 * Created by itc_user on 7/20/2016.
 */


(function () {
    'use strict';
    angular.module('myApp').factory("factoryShop",function($http){

        var myFact ={};
        myFact.getProducts=function () {
            return  $http.get('https://api.myjson.com/bins/28h91').then(function(data) {
                return data.data;
            });
        };
        return myFact;

    });
})();