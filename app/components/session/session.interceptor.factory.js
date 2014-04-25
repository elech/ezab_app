EZAB_APP.factory('sessionInterceptor', ['$rootScope', '$q', '$window', '$injector', function ($rootScope, $q, $window, $injector) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    },
    responseError: function (response) {
      if (response.status === 401) {
        $window.sessionStorage.token = null;
        $injector.get('$state').go('login');
        // handle the case where the user is not authenticated
      }
      return response || $q.when(response);
    }
  };
}]);

EZAB_APP.config(function ($httpProvider) {
  $httpProvider.interceptors.push('sessionInterceptor');
});