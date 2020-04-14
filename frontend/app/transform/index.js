import angular from 'angular';


export default angular
  .module('member_portal.transform', [])
  .component('transform', require('./transform.component').default)
  .config(require('./transform.routes').default)
  .name;
