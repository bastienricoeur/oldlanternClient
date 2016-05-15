myApp.factory('CreateCommandeFact', function($http, APPLINK) {
    var _newcomFactory = {};

    _newcomFactory.insert= function(date) {
      return $http.post(APPLINK+'/api/v1/commande/', {
        date: date
      });
    }
    return _newcomFactory;
});
