/*(function() {
    "use strict";

    var module = angular.module("zkPastry");
    
    module.component("pastryApp", {
       templateUrl: "/js/components/pastry-app/pastry-app.component.html",
       $routeConfig: [
           { path: "/main", component:"mainInfo", name: "Main" },
           { path: "/about", component:"aboutInfo", name: "About" },
           { path: "/caffee", component:"caffeeInfo", name: "Caffee" },
           { path: "/menu", component:"menuInfo", name: "Menu" },
           { path: "/order", component:"orderInfo", name: "Order" },
           { path: "/contacts", component:"contactsInfo", name: "Contacts" },
           { path: "/**", redirectTo: ["Main"] }
       ]
    });

}());*/