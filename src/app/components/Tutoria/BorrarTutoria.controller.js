(function () {
  'use strict';
  angular.module('app')
  .controller('BorrarTutoria.controller', deleteCtrl);

  deleteCtrl.$inject = ['TutoriaService', '$stateParams', '$log'];
  function deleteCtrl(TutoriaService, $stateParams, $log) {
    var vm = this;
    vm.location = 'update';
  }
})();
