(function () {
  'use strict';
  angular
  .module('app')
  .component('navBar', {
    templateUrl: 'app/components/Nav/Nav.html',
    controller: navCtrl,
    controllerAs: 'vm'
  });

  navCtrl.$inject = ['$state'];

  function navCtrl($state) {
    var vm = this;
    vm.isActive = function (data) {
      return $state.current.name === data;
    };
  }
})();
