(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var service = ShoppingListCheckOffService;
        var ctrl = this;
        ctrl.list = service.getToBuyList();
        ctrl.isEmpty = service.isToBuyListEmpty;
        ctrl.checkOff = service.checkOff;
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var service = ShoppingListCheckOffService;
        var ctrl = this;
        ctrl.list = service.getBoughtList();
        ctrl.isEmpty = service.isBoughtListEmpty;
    }

    function ShoppingListCheckOffService() {
        var service = this;

        service.toBuyList = [
            {
                name: "Cookies",
                quantity: "24"
            },
            {
                name: "Cakes",
                quantity: "2"
            },
            {
                name: "Bananas",
                quantity: "10"
            },
            {
                name: "Oranges",
                quantity: "6"
            },
            {
                name: "Eggs",
                quantity: "12"
            }
        ];

        service.boughtList = [];

        service.checkOff = function (itemIndex) {
            var boughtItem = service.toBuyList.splice(itemIndex, 1)[0];
            service.boughtList.push(boughtItem);
        };

        service.getToBuyList = function () {
            return service.toBuyList;
        };

        service.getBoughtList = function () {
            return service.boughtList;
        };

        service.isToBuyListEmpty = function () {
            return service.toBuyList.length == 0;
        };

        service.isBoughtListEmpty = function () {
            return service.boughtList.length == 0;
        };
    }

})();
