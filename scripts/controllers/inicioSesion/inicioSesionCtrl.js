'use strict';
angular.module('tallerFirebase')
.controller('inicioSesionCtrl', ['$scope', '$location', function($scope, $location){
	
	$scope.iniciarSesion = function(correo, contrasenia){
		$location.path('/principal')
	}
}])