(function(){
	'use strict';

	angular
	.module('app')
	.service('EstudianteService',estudianteService);

	estudianteService.$inject = ['$resource'];

	function estudianteService($resource){

		return $resource('http://localhost:8000/api/estudiantes/:id',{id:'@id'});
	}

})();