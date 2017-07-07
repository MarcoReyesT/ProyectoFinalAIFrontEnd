(function () {
  'use strict';
  angular.module('app')
  .controller('ActualizarTutoria.controller', updateCtrl);

  updateCtrl.$inject = ['TutoriaService', 'TutorService', 'RamoService', 'EstudianteService', '$stateParams', '$log'];
  function updateCtrl(TutoriaService, TutorService, RamoService, EstudianteService, $stateParams, $log) {
    var vm = this;
    vm.location = 'update';
    vm.tutores = TutorService.query();
    vm.ramos = RamoService.query();
    vm.estudiantes = EstudianteService.query();
    vm.tutoriaForm = TutoriaService.get({id: $stateParams.id});
    vm.tutorias = {
      estudiante_id: null,
      ramo_id: null,
      tutor_id:null,
      fecha:null,
      monto:null
    }
    vm.semanticAction = function(data){

      data.fecha = convertDate(data.fecha);

      TutoriaService.update({id: $stateParams.id},data,function(response){
        $rootScope.$broadcast('actualizar');
        $state.go('tutoriaRealizada');
      },function(response){
  
      });

    }

    TutoriaService.get({id: $stateParams.id},function(data){

      vm.tutoria.fecha = new Date(data.fecha); 
      vm.tutoria.monto = data.monto;
      vm.tutoria.tutor_id = data.tutor_id;
      vm.tutoria.estudiante_id = data.estudiante_id;
      vm.tutoria.ramo_id = data.ramo_id;

    });

    function convertDate(str) {
      var date = new Date(str);
      var mnth = ('0' + (date.getMonth() + 1)).slice(-2);
      var day = ('0' + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join('-');
    }

  }
})();
