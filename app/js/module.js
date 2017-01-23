(function() {
    "use strict";

    var module = angular.module("zkPastry", ["ngRoute"]);

  	module.config(['$locationProvider','$routeProvider', function ($locationProvider, $routeProvider) {
	  //$locationProvider.html5Mode(true);
	   /* $locationProvider.hashPrefix('');*/
   		$routeProvider
   			.when("/main", { template:"<span>main</span>"})
   			.when("/about", { template:"<span>about</span>"})
   			.when("/cafe", { template:"<cafe-info></cafe-info>"})
   			.when("/menu", { template:"<menu-info></menu-info>"})
   			.when("/order", { template:"<order-info></order-info>"})
   			.when("/contacts", { template:"<contacts-info></contacts-info>"})
   			.otherwise({redirectTo:'/main'});
  	}]);


    
    //module.value("$routerRootComponent", "pastryApp");
        
   /* module.component("aboutInfo",{
       template: "This is the about page" 
    });*/


  

}());