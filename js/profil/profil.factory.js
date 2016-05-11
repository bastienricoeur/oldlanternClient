myApp.factory('GetProfil', function($http, APPLINK) {
  var urlBase = APPLINK+'/api/v1/user';
  var _profFactory = {};

  _profFactory.getProf = function() {
    return $http.get(urlBase);
  };

  return _profFactory;
});
