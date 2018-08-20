console.log('JS');


let myApp = angular.module('myApp', ['ngRoute']);


myApp.config( function ( $routeProvider){
    $routeProvider.when( '/', {
        templateUrl: '/views/home.html', //path of home
        controller: 'HomeController as hc' 
    }) // end home
    .when( '/rental', {
        templateUrl: '/views/rental.html', //path of rental html
        controller: 'RentalController as rc' //name of rental controller
     }) //end rental
     .when('/sale', {
        templateUrl: '/views/sale.html', //path of sale html
        controller: 'SaleController as sc' // name of sale controller
     })// end sale
     .otherwise({
         templateUrl: '/views/404.html' // error page
     }) // end

})