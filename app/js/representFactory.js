electionMateApp.factory('getRepQuestion', ['$http', function($http) {
  var queryUrl = 'https://represent.me/api/questions/';

  return {
    query: function() {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          "search": "europe"
        }
      });
    }
  };
}]);
