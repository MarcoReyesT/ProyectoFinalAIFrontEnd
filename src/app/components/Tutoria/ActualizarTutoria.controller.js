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

      data.fecha = getFullFecha(data.fecha);

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

    function getFullFecha(fecha){
      var dia = fecha.getDate();
      var mes = fecha.getMonth() + 1;
      var anno = fecha.getFullYear();

      if(mes<10){
        mes = "0"+mes;
      }

      return dia +"-" + mes + "-" + anno;
    }

  }
})();
