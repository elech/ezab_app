EZAB_APP.factory('apiVersionInterceptor', ['$rootScope', '$q', '$injector', function ($rootScope, $q, $injector) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if(config.url && config.url.indexOf('.html') === -1){
        config.url = "/api/v1" + config.url;
      }
      return config;
    },
    responseError: function (response) {

      return response;
    }
  };
}]);

EZAB_APP.config(function ($httpProvider) {
  $httpProvider.interceptors.push('apiVersionInterceptor');
});