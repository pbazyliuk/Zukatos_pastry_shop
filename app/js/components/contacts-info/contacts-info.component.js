(function() {
    "use strict";

    var module = angular.module("zkPastry");

   
    function controller() {

        
    }

    module.component("contactsInfo", {
        templateUrl: "/js/components/contacts-info/contacts-info.component.html",
        controllerAs: "model",
        controller: [controller]
    });

} ());