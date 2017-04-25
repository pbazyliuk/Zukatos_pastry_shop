(function() {
    "use strict";

    var module = angular.module("zkPastry");

   
 /*   function controller() {

        
    }*/

    module.component("cafeInfo", {
        templateUrl: "/js/components/cafe-info/cafe-info.component.html",
        controllerAs: "model",
         controller: function($scope) {
    	$scope.tab = 1;

	    $scope.setTab = function(newTab){
	      $scope.tab = newTab;
	    };

	    $scope.isSet = function(tabNum){
	      return $scope.tab === tabNum;
	    };
        
       /* scope.$watch('name', function(newValue, oldValue) {
		  scope.counter = scope.counter + 1;
		});*/
    }
    });

} ());