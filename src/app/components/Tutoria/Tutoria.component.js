(function () {
  'use strict';

  angular
  .module('app')
  .component('tutoria', {
    templateUrl: 'app/components/Tutoria/Tutoria.html',
    controller: tutoriaCtrl,
    controllerAs: 'vm'
  });

  tutoriaCtrl.$inject = ['TutoriaService'];

  function tutoriaCtrl(TutoriaService) {
    var vm = this;
    TutoriaService.query().$promise.then(function (data) {

      vm.tutorias = data;
    });
  }
})();
