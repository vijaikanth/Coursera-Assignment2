(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;
showList.toBuyFlag=false;
     showList.items = ShoppingListCheckOffService.getItems();

     showList.removeItem = function (itemIndex) {
       ShoppingListCheckOffService.removeItem(itemIndex);
     };

//console.log(angular.toJson(showList));
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService) {
   var boughtList = this;
   boughtList.itemName = "";
   boughtList.itemQuantity = "";
   boughtList.items = ShoppingListCheckOffService.getItems2();
 }


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [];
  var items2 = [];
  items = [{"name":"1 Item","quantity":"2"},
               {"name":"2 Item","quantity":"3"},
               {"name":"3 Item","quantity":"2"},
               {"name":"4 Item","quantity":"5"},
               {"name":"5 Item","quantity":"2"}];


  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items2.push(items[itemIdex]);
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
  service.getItems2 = function () {
    return items2;
  };
}

})();
