getQuestion.factory('getQuestion', ['$http', function($http) {
  var queryUrl = 'https://represent.me/api/questions/';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
        }
      });
    }
  };
}]);
