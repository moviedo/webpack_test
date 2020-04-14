export default homeRoutes;


homeRoutes.$inject = ['$stateProvider'];
function homeRoutes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });
}
