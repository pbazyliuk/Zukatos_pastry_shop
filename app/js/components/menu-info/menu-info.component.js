(function() {
    "use strict";

    var module = angular.module("zkPastry");

   
    function controller() {

        
    }

    module.component("menuInfo", {
        templateUrl: "/js/components/menu-info/menu-info.component.html",
        controllerAs: "model",
        controller: [controller]
    });

} ());