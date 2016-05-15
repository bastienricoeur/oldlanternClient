myApp.controller("CartsCtrl", ['$scope','$location','MyCarts',
function($scope,$location,MyCarts) {
  $scope.carts = [];

  MyCarts.getCarts().then(function(data) {
    $scope.carts = data.data.data;
  });
}
]);
