'use strict';
angular.module('tallerFirebase')
.controller('principalCtrl', ['$scope',function($scope){
	var imagenPerfil;
	$scope.editarPerfil = false;
	$scope.usuario = {
						nombre: 'Brayan Josue Medina',
						correo: 'brayanmedina35.bmm@gmail.com',
						informacion: 'Estudiante de Ingenieria en Sistemas en la Universidad Nacional Autonoma de Honduras',
						profesion: 'Desarrollador FrontEnd',
						telefono: '99-99-99-99',
						sexo: 'masculino'
					};

	$scope.eliminarMensaje = function(){
		var respuesta = confirm("Desea eliminar este mensaje?");
		if (respuesta) {
		    console.log('Mensaje eliminado')
		} else {
		    console.log('Cancelado')
		}
	}

	$scope.abrirModalNuevoMensaje = function(){
		$('#nuevoMensajeModal').modal('show');
	}

	$scope.abrirModalPerfil = function(){
		$('#perfilModal').modal('show');
	}

	/*Esta seccion de codigo controlara lo referente al perfil del usuario*/
	$scope.editarInformacion = function(){
		$scope.mostrarElementosEditarCont = false;
		$scope.editarPerfil = true;
	}

	$scope.cancelarCambios = function(){
		$scope.editarPerfil = false;
		$scope.mostrarElementosEditarCont = false;
		//$('#perfil-usuario').html("<img src='" + UsuarioService.getImagen() + "' alt='"+'avatar'+"' class='"+'img-perfil-usuario'+"'>");
	}

	//Mediante esta funcion se inserta la etiqueta <img> en la etiqueta con id = perfil-usuario
    function renderImage(file) {
	 	imagenPerfil = file;
        var url = URL.createObjectURL(file);	    
        var reader = new FileReader();
        reader.onload = function(event) {
           var the_url = event.target.result;
           $('#perfil-usuario').html("<img src='" + the_url + "' alt='"+'avatar'+"' class='"+'img-perfil-usuario'+"'>");
        }
        reader.readAsDataURL(file);
    }
    //Se ejecuta cuando ha habido un cambio en el input tipo file con id = file1
    $("#file1").change(function() {
        renderImage(this.files[0]);
    });
	/*Esta seccion de codigo controlara lo referente al perfil del usuario*/
}])