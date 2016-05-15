var myApp = angular.module('ngclient', ['ngRoute']);
myApp.constant('APPLINK','http://localhost:3001');
myApp.config(function($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('TokenInterceptor');
  $routeProvider
  .when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl',
    access: {
      requiredLogin: false
    }
  }).when('/signup', {
    templateUrl: 'partials/signup.html',
    controller: 'SignupCtrl',
    access: {
      requiredLogin: false
    }
  }).when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl',
    access: {
      requiredLogin: true
    }
  }).when('/profil', {
    templateUrl: 'partials/myprofil.html',
    controller: 'MyProfilCtrl',
    access: {
      requiredLogin: true
    }
  }).when('/majprofil', {
    templateUrl: 'partials/updateprofil.html',
    controller: 'MyProfilCtrl',
    access: {
      requiredLogin: true
    }
  }).when('/mycarts', {
    templateUrl: 'partials/carts.html',
    controller: 'CartsCtrl',
    access: {
      requiredLogin: true
    }
  }).when('/page2', {
    templateUrl: 'partials/page2.html',
    controller: 'Page2Ctrl',
    access: {
      requiredLogin: true
    }
  }).when('/page3', {
    templateUrl: 'partials/page3.html',
    controller: 'Page3Ctrl',
    access: {
      requiredLogin: true
    }
  }).otherwise({
    redirectTo: '/login'
  });
});
myApp.run(function($rootScope, $window, $location, AuthenticationFactory,GetProfil) {
  // when the page refreshes, check if the user is already logged in
  AuthenticationFactory.check();
  $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
    if ((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged) {
      $location.path("/login");
    } else {
      // check if user object exists else fetch it. This is incase of a page refresh
      if (!AuthenticationFactory.user) AuthenticationFactory.user = $window.sessionStorage.user;
      if (!AuthenticationFactory.userRole) AuthenticationFactory.userRole = $window.sessionStorage.userRole;
    }
  });

  $rootScope.$on('$routeChangeSuccess', function(event, nextRoute, currentRoute) {
    $rootScope.showMenu = AuthenticationFactory.isLogged;
    $rootScope.role = AuthenticationFactory.userRole;
    $rootScope.admin=false;
    // if the user is already logged in, take him to the home page
    if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
      $location.path('/');
    }
    if(AuthenticationFactory.isLogged)
    {
      GetProfil.getProf().then(function(data) {
        if(data.data.data.attribute.role=="admin")
        {
          $rootScope.admin=true;
        }
        else {
          $rootScope.admin=false;
        }

      });
    }
    else {
      $rootScope.admin=false;
    }
  });

});
