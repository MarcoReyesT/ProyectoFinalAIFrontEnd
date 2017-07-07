(function () {
  'use strict';
  angular.module('app')
  .controller('ActualizarTutoria.controller', updateCtrl);

  updateCtrl.$inject = ['TutoriaService', '$stateParams', '$log'];
  function updateCtrl(TutoriaService, $stateParams, $log) {
    var vm = this;
    vm.location = 'update';
    $log.debug($stateParams.id);
    vm.tutoriaForm = TutoriaService.get({id: $stateParams.id});
    vm.tutorias = null;
    TutoriaService.query().$promise.then(success, error);
    vm.semanticAction = function (form) {
      console.log(form);
      TutoriaService.save(form, success, error);
    };
    // Private functions
    function success(data) {
      vm.tutorias = data;
      $log.debug(vm.tutorias);
    }
    function error(data) {
      $log.debug(data);
    }
  }
})();
