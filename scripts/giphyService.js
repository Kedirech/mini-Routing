var app = angular.module("miniRouting");

app.service("giphyService",function($http){
  this.getRandomGiphy = function(tag){
    return $http({
      method:"GET",
      url:"http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+tag

    }).then(function(response){
      console.log(response);
      return response.data.data.image_url;
    },
    function(error){
      console.log(error)});
  }
})