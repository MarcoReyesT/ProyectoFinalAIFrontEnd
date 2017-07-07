(function(){
	'use strict';

	angular
	.module('app')
	.service('TutorService',tutorService);

	tutorService.$inject = ['$resource'];

	function tutorService($resource){

		return $resource('http://localhost:8000/api/tutores/:id',{id:'@id'});
	}

})();