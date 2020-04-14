
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';


angular.module('member_portal', [
  uiRouter,
  require('./app-entry').default,
  require('./home').default,
  require('./transform').default,
])
  .run(['$urlService', function($urlService) {
    $urlService.rules.otherwise({ state: 'home' });
  }]);
