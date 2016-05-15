myApp.controller("ProductCtrl", ['$scope','$location','ListProducts','TypesProduct','CreateProdFact',
function($scope,$location,ListProducts,TypesProduct,CreateProdFact) {
  $scope.products = [];

  ListProducts.getProducts().then(function(data) {
    $scope.products = data.data.data;
  });

  $scope.typesProd = [];

  TypesProduct.getTypes().then(function(data) {
    $scope.typesProd = data.data.data;
  });

  $scope.newProd = {
  };

  $scope.createProd = function() {
    var nom = $scope.newProd.nom;
    var desc = $scope.newProd.description;
    var prix = $scope.newProd.prix;
    var nbexemp = $scope.newProd.nbexemp;
    var img = $scope.newProd.urlImg;
    var typeart = $scope.newProd.typearticle.id;
    if (nom !== undefined && desc !== undefined && prix !== undefined && nbexemp !== undefined && img !== undefined && typeart !== undefined) {

        CreateProdFact.insert(nom, desc, prix, nbexemp, img, typeart).success(function(data) {

        $location.path("/");
      }).error(function(status) {
        alert('Invalid credentials');
      });
    } else {
      alert('Veuillez remplir tous les champs du formulaire');
    }
  };
}
]);
