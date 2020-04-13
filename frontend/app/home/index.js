import angular from 'angular';


export default angular
  .module('member_portal.home', [])
  .component('home', require('./home.component'))
  .config('./home.routes')
  .name;
