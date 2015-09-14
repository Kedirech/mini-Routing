var app = angular.module("miniRouting",['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",{
    templateUrl:"scripts/home/homeTmpl.html",
    controller:"homeCtrl"
  }).when("/settings",{
    templateUrl:"scripts/settings/settingsTmpl.html",
    controller:"settingsCtrl"
  }).when("/products/:id",{
    templateUrl:"scripts/products/productTmpl.html",
    controller:"productsCtrl"
  }).otherwise({
    redirectTo:"/"
  })
});