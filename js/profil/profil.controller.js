myApp.controller("MyProfilCtrl", ['$scope','GetProfil',
function($scope, GetProfil) {
  $scope.userProfil = [];

  GetProfil.getProf().then(function(data) {
    $scope.userProfil = data.data;
  });
}
]);
