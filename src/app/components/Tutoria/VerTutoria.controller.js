(function () {
  'use strict';
  angular.module('app')
  .controller('VerTutoria.controller', viewCtrl);

  viewCtrl.$inject = ['TutoriaService', '$stateParams', '$log'];
  function viewCtrl(TutoriaService, $stateParams, $log) {
    var vm = this;
    vm.location = 'view';
    $log.debug($stateParams.id);
    vm.tutoriaForm = TutoriaService.get({id: $stateParams.id});
  }
})();
