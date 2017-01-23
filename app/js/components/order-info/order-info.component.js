(function() {
    "use strict";

    var module = angular.module("zkPastry");

   
    function controller() {

        
    }

    module.component("orderInfo", {
        templateUrl: "/js/components/order-info/order-info.component.html",
        controllerAs: "model",
        controller: [controller]
    });

} ());