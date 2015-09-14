var app = angular.module("miniRouting");

app.service("productsService", function(giphyService, $q, $rootScope){

  var firebaseRef = new Firebase("https://giphyshopping.firebaseio.com/");
  var productData=[];
  var loadingPromise;
  var shoeData={};
  var sockData={};
  var mythologicalData={};
  firebaseRef.on('value', function(snapshot){
    productData = snapshot.val();
    shoeData = productData.shoes;
    sockData = productData.socks;
    mythologicalData = productData.mythological;

    console.log("broadcast");
    console.log(shoeData);
    console.log(sockData);
    console.log(mythologicalData);
    $rootScope.$broadcast("productUpdate")
  }.bind(this));

//this.saveData();
this.addNewProduct = function(newProduct, category){
  giphyService.getRandomGiphy(newProduct.type).then(function(giphyUrl){
    newProduct.giphyUrl = giphyUrl;
    return firebaseRef.child(category).push(newProduct);
  });
}

this.removeProduct = function(category, productId){
  firebaseRef.child(category).child(productId).remove();
}

this.getProductsByType = function(productType){
    
    switch(productType){
      case 'shoes':
      return shoeData;

      case 'socks':
      return sockData;

      case 'mythological':
      return mythologicalData

    }
    return "error";
  }

});
