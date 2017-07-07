(function () {
  'use strict';
  angular
  .module('app')
  .config(routesConfig);

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        url: '/',
        component: 'app'
      })
      .state('tutoria', {
        url: '/tutoria',
        component: 'tutoria'
      })
      .state('crearTutoria', {
        url: '/tutoria/crear',
        controller: 'CrearTutoria.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Tutoria/FormTutoria.html'
      })
      .state('verTutoria', {
        url: '/tutoria/:id/ver',
        controller: 'VerTutoria.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Tutoria/FormTutoria.html'
      })
      .state('borrarTutoria', {
        url: '/tutoria/:id/borrar',
        controller: 'BorrarTutoria.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Tutoria/FormTutoria.html'
      })
      .state('actualizarTutoria', {
        url: '/tutoria/:id/actualizar',
        controller: 'ActualizarTutoria.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Tutoria/FormTutoria.html'
      });
  }
})();
