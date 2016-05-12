myApp.controller("MyProfilCtrl", ['$scope','$location','GetProfil','DelProfFac','UserAuthFactory',
function($scope,$location,GetProfil,DelProfFac,UserAuthFactory) {
  $scope.userProfil = [];

  GetProfil.getProf().then(function(data) {
    $scope.userProfil = data.data;
  });

  $scope.uptProf = function()
  {
    alert('modifier');
  }

  $scope.delProf = function()
  {
    DelProfFac.deleteProfil().success(function(data) {
      UserAuthFactory.logout();
      $location.path("/login");
    }).error(function(status) {
      alert('Invalid credentials');
    });

  }

  $scope.myCarts = function()
  {
    alert('mes cartes');
  }

  $scope.myLastCom = function()
  {
    alert('mes dernières commandes');
  }
}
]);
