/**
 * Created by CollinsG on 11/09/2016.
 */
(function () {
'use strict';
    var app = angular.module('myFirstApp', []);


    app.controller('MyFirstController', function ($scope) {
            $scope.name = "Glen";
            $scope.sayHello = function() {
                return "Hello Coursera";
            };
        });

})();
