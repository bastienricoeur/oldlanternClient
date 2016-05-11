myApp.controller('LoginCtrl', ['$scope', '$window', '$location', 'UserAuthFactory', 'AuthenticationFactory',
function($scope, $window, $location, UserAuthFactory, AuthenticationFactory) {
  $scope.user = {
  };
  $scope.login = function() {
    var username = $scope.user.username;
    var password = $scope.user.password;
    if (username !== undefined && password !== undefined) {

      UserAuthFactory.login(username, password).success(function(data) {

        AuthenticationFactory.isLogged = true;

        $window.sessionStorage.token = data.token;
        
        $location.path("/");
      }).error(function(status) {
        alert('Erreur de mot de passe ou d\'identifiant');
      });
    } else {
      alert('Veuillez remplir tous les champs du formulaire');
    }
  };
}
]);
