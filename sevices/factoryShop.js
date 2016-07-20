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
                    "detail":"mfksajhfoiaf zjfaijef jfdjasfj jsdfjpsjf sjfeg ljafjg ljglshg sgkhg nljagfpjg lsjgg."
                    // "id": "1"
                },
                {
                    "name": "Cookieman",
                    "price": "99.99",
                    "image": "images/cookieman.png",
                    "description": "lalalalalalal lalala la",
                    "detail":"mfksajhfoiaf zjfaijef jfdjasfj jsdfjpsjf sjfeg ljafjg ljglshg sgkhg nljagfpjg lsjgg."
                    // "id": "2"
                },
                {
                    "name": "Beto",
                    "price": "99.99",
                    "image": "images/beto.png",
                    "description": "lalalalalalal lalala la",
                    "detail":"mfksajhfoiaf zjfaijef jfdjasfj jsdfjpsjf sjfeg ljafjg ljglshg sgkhg nljagfpjg lsjgg."
                    // "id": "3"
                },
                {
                    "name": "Elmo",
                    "price": "99.99",
                    "image": "images/elmo.png",
                    "description": "lalalalalalal lalala la",
                    "detail":"mfksajhfoiaf zjfaijef jfdjasfj jsdfjpsjf sjfeg ljafjg ljglshg sgkhg nljagfpjg lsjgg."
                    // "id": "4"
                }
            ];
        };
        return myFact;

    });
})();