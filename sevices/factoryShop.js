/**
 * Created by itc_user on 7/20/2016.
 */


(function () {
    'use strict';
    angular.module('myApp').factory("factoryShop",function(){

        var myFact ={};
        myFact.getProducts=function () {
            return [
                {
                    "name": "Garibaldo",
                    "price": "99.99",
                    "image": "images/garibaldo.jpg",
                    "description": "lalalalalalal lalala la",
                    "detail":"mfksajhfoiaf zjfaijef jfdjasfj jsdfjpsjf sjfeg ljafjg ljglshg sgkhg nljagfpjg lsjgg.",
                   "id": "Gabribaldo"
                },
                {
                    "name": "Cookieman",
                    "price": "99.99",
                    "image": "images/cookieman.png",
                    "description": "lalalalalalal lalala la",
                    "detail":"mfksajhfoiaf zjfaijef jfdjasfj jsdfjpsjf sjfeg ljafjg ljglshg sgkhg nljagfpjg lsjgg.",
                     "id": "Cookieman"
                },
                {
                    "name": "Beto",
                    "price": "99.99",
                    "image": "images/beto.png",
                    "description": "lalalalalalal lalala la",
                    "detail":"mfksajhfoiaf zjfaijef jfdjasfj jsdfjpsjf sjfeg ljafjg ljglshg sgkhg nljagfpjg lsjgg.",
                    "id": "Beto"
                },
                {
                    "name": "Elmo",
                    "price": "99.99",
                    "image": "images/elmo.png",
                    "description": "lalalalalalal lalala la",
                    "detail":"mfksajhfoiaf zjfaijef jfdjasfj jsdfjpsjf sjfeg ljafjg ljglshg sgkhg nljagfpjg lsjgg.",
                     "id": "Elmo"
                },
                {
                    "name": "Oscar",
                    "price": "99.99",
                    "image": "images/oscar.png",
                    "description": "lalalalalalal lalala la",
                    "detail":"mfksajhfoiaf zjfaijef jfdjasfj jsdfjpsjf sjfeg ljafjg ljglshg sgkhg nljagfpjg lsjgg.",
                    "id": "Oscar"
                }
            ];
        };
        return myFact;

    });
})();