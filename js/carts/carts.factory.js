myApp.factory('MyCarts', function($http, APPLINK) {
  var urlBase = APPLINK+'/api/v1/carts/';
  var _cartsFactory = {};

  _cartsFactory.getCarts = function() {
    return $http.get(urlBase);
  };

  return _cartsFactory;
});
