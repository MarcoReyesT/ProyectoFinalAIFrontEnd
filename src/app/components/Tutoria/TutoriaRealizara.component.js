(function () {
  'use strict';

  angular
  .module('app')
  .component('tutoriaRealizada', {
    templateUrl: 'app/components/Tutoria/TutoriaRealizada.html',
    controller: tutoriaReCtrl,
    controllerAs: 'vm'
  });

  tutoriaReCtrl.$inject = ['TutoriaService'];

  function tutoriaReCtrl(TutoriaService) {
    var vm = this;
    TutoriaService.query().$promise.then(function (data) {

      vm.tutoriasRe = data;
    });
  }
})();
