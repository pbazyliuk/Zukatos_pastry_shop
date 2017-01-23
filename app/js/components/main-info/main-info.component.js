(function() {
	'use strict';

	var module = angular.module("zkPastry");

	

	function controller() {

			var model = this;
		
		}
		
	module.component("mainInfo", {

		templateUrl: "/js/components/main-info/main-info.component.html",
		controller: [controller],
		controllerAs: "model"

	});

}());