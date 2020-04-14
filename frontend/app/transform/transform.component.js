
class TransformClass {
  static $inject = [
    '$window',
  ];

  constructor($window) {
    this.$window = $window;
  }

  $onInit = () => {
    this.href = this.$window.location.href;
  }
}

export default {
  template: require('./transform.html'),
  controller: TransformClass,
  controllerAs: 'vm'
};
