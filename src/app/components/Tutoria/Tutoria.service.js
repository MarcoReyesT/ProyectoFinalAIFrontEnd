(function () {
  'use strict';

  angular
  .module('app')
  .service('TutoriaService', tutoriaService);

  tutoriaService.$inject = ['$resource'];

  function tutoriaService($resource) {
    return $resource('http://localhost:8000/api/tutorias/:id', {id: '@id'});
  }
})();
