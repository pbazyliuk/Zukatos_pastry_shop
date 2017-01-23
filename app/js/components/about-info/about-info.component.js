(function() {
    "use strict";

    var module = angular.module("zkPastry");

   
    function controller() {

        
    }

    module.component("aboutInfo", {
        templateUrl: "/js/components/about-info/about-info.component.html",
        controllerAs: "model",
        controller: [controller]
    });

} ());