/**
 * Created by TerDen on 03.02.2016.
 */
app.controller('MainController', ['$scope', function ($scope) {
    $scope.summOfTwo = function(){
      return document.getElementById("number1").value*1 + document.getElementById("number2").value*1;
      // или можно так
      //return $scope.number1 + $scope.number2
    };
}]);