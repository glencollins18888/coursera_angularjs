(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var buyItems = this;

        buyItems.items = ShoppingListCheckOffService.getAvailableItems();

        buyItems.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var boughtCtrl = this;
        boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        var items = [
            {"name" : "cookies", "quantity" : 10},
            {"name" : "chocolates", "quantity" : 20},
            {"name" : "m&ms", "quantity" : 3},
            {"name" : "milk", "quantity" : 5},
            {"name" : "beer", "quantity" : 15}
        ]

        var bought = [];

        service.getAvailableItems = function() {
            return items;
        }

        service.getBoughtItems = function() {
            return bought;
        }

        service.buyItem = function (itemIndex) {
            var item = items[itemIndex];
            items.splice(itemIndex, 1);
            bought.push(item);
        };

    }



})();
