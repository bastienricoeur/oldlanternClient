myApp.factory('ListProducts', function($http, APPLINK) {
  var urlBase = APPLINK+'/api/v1/products/';
  var _productsFactory = {};

  _productsFactory.getProducts = function() {
    return $http.get(urlBase);
  };

  return _productsFactory;
});

myApp.factory('TypesProduct', function($http, APPLINK) {
  var urlBase = APPLINK+'/api/v1/prodtypes/';
  var _typesFactory = {};

  _typesFactory.getTypes = function() {
    return $http.get(urlBase);
  };

  return _typesFactory;
});

myApp.factory('CreateProdFact', function($http, APPLINK) {
  return {
    insert: function(nom, desc, prix, nbexemp, img, typeart) {
      return $http.post(APPLINK+'/api/v1/admin/product/', {
        nom: nom,
        description: desc,
        prix: prix,
        nbExemplaire: nbexemp,
        img: img,
        typeart: typeart
      });
    }
  }
});
