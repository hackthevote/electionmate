var electionMateApp = angular
  .module('electionMateApp', ['ngResource','LocalStorageModule'])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]);
