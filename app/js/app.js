var electionMateApp = angular
  .module('electionMateApp', ['ngResource','LocalStorageModule'])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]);
electionMateApp.filter("jsDate", function () {
  return function (x) {
      return Date.parse(x);
  };
});
electionMateApp.filter('rawHtml', ['$sce', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}]);