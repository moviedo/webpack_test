export default transformRoutes;


transformRoutes.$inject = ['$stateProvider'];
function transformRoutes($stateProvider) {
  $stateProvider
    .state('transform', {
      url: '/transform',
      template: '<transform></transform>'
    });
}
