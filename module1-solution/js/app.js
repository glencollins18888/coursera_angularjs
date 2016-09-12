(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.submit = function () {
            if(typeof $scope.dishes !== "undefined" && $scope.dishes.trim() !== "") {
                // Valid Dishes entered, split these based on comma
                $scope.messageTypeClass = "success";
                var dishes = $scope.dishes.split(",");
                if(dishes.length > 3) {
                    $scope.message = "Too much!";
                } else {
                    $scope.message = "Enjoy";
                }
            } else {
                $scope.message = "Please enter data first";
                $scope.messageTypeClass = "error";
            }
        };
    }

})();
