(function () {
  'use strict';
  // Se declara un nuevo componente angular que, en la aplicación app, este también se llama app
  angular
    .module('app')
    .component('app', {
      templateUrl: 'app/container/main.html',
      controller: appCtrl,
      controllerAs: 'vm'
    });
  /**
  * Función global que es el Controlador del componente app, es llamada en la declaración del componente,
  * además usa un alias llamado vm (para hacer data bind en la vista)
  */
  function appCtrl() {
    // Instancia del alias del controlador, servirá para usar modelos en la vista
    var vm = this;
    vm.titulo = 'Controlador de Inscripcion de tutorias';
  }
})();
