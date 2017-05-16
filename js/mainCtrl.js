angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){

  $scope.quotes = dataService.getQuotes();

  $scope.deleteMe = function(text){
    return dataService.deleteMe(text);
  }

  $scope.addMe = function(){
    let newQuote = {};
    newQuote.text = $scope.text;
    newQuote.author = $scope.author;

    dataService.addData(newQuote);
    $scope.text = "";
    $scope.author = "";
  }




});
