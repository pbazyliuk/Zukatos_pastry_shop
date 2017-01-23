(function() {
    "use strict";

    var module = angular.module("zkPastry");

   
    function controller() {

        
    }

    module.component("cafeInfo", {
        templateUrl: "/js/components/cafe-info/cafe-info.component.html",
        controllerAs: "model",
        controller: [controller]
    });

} ());