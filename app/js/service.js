(function() {
	'use strict';

var module = angular.module("zkPastry");

module.service('aaa', function() {
    this.myFunc = function (x) {
       switch (x) {
  case '/main':
    x = "header__hero-photo--main-theme";
    return x;
    break;
  case '/about':
     x = "header__hero-photo--about-theme";
     return x;
    break;
   case '/cafe':
     x = "header__hero-photo--cafe-theme";
     return x;
    break;
    case '/menu':
     x = "header__hero-photo--menu-theme";
     return x;
    break;
    case '/order':
     x = "header__hero-photo--order-theme";
     return x;
    break;
    case '/contacts':
     x = "header__hero-photo--contacts-theme";
     return x;
    break;
  /*default:
    alert( 'Я таких значений не знаю' );
    break;*/
}


    };
});

}());