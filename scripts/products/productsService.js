var app = angular.module("miniRouting");

app.service("productsService", function(giphyService, $q){

  var firebaseRef = new Firebase("https://giphyshopping.firebaseio.com/");
  var productData=[];
  var loadingPromise;
  firebaseRef.on('value', function(snapshot){
    productData = snapshot.val();
    shoeData = productData.shoes;
    sockData = productData.socks;
    mythologicalData = productData.mythological;

    console.log(sockData);
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
