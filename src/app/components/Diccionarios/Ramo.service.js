(function(){
	'use strict';

	angular
	.module('app')
	.service('RamoService',ramoService);

	ramoService.$inject = ['$resource'];

	function ramoService($resource){

		return $resource('http://localhost:8000/api/ramos/:id',{id:'@id'});
	}

})();