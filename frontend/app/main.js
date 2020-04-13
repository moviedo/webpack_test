
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';


angular.module('member_portal', [
  uiRouter,
  require('./app-entry'),
  require('./home'),
])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state("otherwise", { state : 'home' });
  }]);
