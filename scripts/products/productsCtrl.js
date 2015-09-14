var app = angular.module("miniRouting");

app.controller("productsCtrl", function($scope, $routeParams, productsService, giphyService){

  $scope.$on("productUpdate", function(event, args){
    console.log("Updated");
    $scope.products = productsService.getProductsByType($scope.id);
    console.log($scope.products);
    $scope.$apply();
  });

  $scope.id = $routeParams.id;
  $scope.products = productsService.getProductsByType($scope.id);

  $scope.addNewProduct = function(){
    console.log("I ran");
    if ($scope.newProduct.type && $scope.newProduct.color && $scope.newProduct.size){
      productsService.addNewProduct($scope.newProduct, $routeParams.id)
    }
    $scope.newProduct = {}; 
  }

  $scope.removeProduct = function (productId){
    //console.log($scope.products);
    //console.log(productId);
    productsService.removeProduct($routeParams.id, productId);
    delete($scope.products[productId]);
  }

  
})