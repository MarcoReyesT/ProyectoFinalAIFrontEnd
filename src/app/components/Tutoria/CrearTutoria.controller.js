(function () {
  'use strict';
  angular.module('app')
  .controller('CrearTutoria.controller', store);

  store.$inject = ['TutoriaService', 'TutorService', 'RamoService', 'EstudianteService', '$log'];

  function store(TutoriaService, TutorService, RamoService, EstudianteService, $log) {
    var vm = this;
    vm.location = 'store';
    vm.tutores = TutorService.query();
    vm.ramos = RamoService.query();
    vm.estudiantes = EstudianteService.query();
    vm.tutoriaForm = {
      estudiante_id: null,
      ramo_id: null,
      tutor_id: null,
      fecha: null,
      monto: null
    };
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
    function convertDate(str) {
      var date = new Date(str);
      var mnth = ('0' + (date.getMonth() + 1)).slice(-2);
      var day = ('0' + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join('-');
    }
  }
})();




