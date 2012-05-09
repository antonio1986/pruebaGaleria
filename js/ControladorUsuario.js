var ControladorUsuario={
   
}

ControladorUsuario.inicio=function(nombre,id){
	var usuarioAct= new Usuario();
	usuarioAct.id=id;
	usuarioAct.nombre=nombre;
	
	GestorOffline.guardarUsuario('actual',usuarioAct);
      if(ControladorUsuario.esUser(id)){
      	console.log("usuario existe ya");
      	//me voy a la página de perfil
      	      	ControladorUsuario.cargarCSS("quimeras");
      	window.location='#principal';
      }else{
      	console.log("usuario no registrado");
      	
      	//me voy a la página de seleccionde  bando
      	window.location='#bandos';
      }
     
}


ControladorUsuario.PintarUsuario=function(usuario){


}

ControladorUsuario.recuperarSeleccion=function(i){
	var Lista=GestorOffline.obtenerLista('partidos');
	return Lista[i];
}

ControladorUsuario.esUser=function(id){
	/*$.post('http://qiisdesa:8004/Login.aspx',{idfacebook:id}, function(data) {
      $('.result').html(data);
      console.log(data);
     });*/
	return true;
}

ControladorUsuario.cargarCSS= function(bando){
	if(bando=="humanos"){
 	var link = $("<link>");
		link.attr({
        	type: 'text/css',
        	rel: 'stylesheet',
        	href: 'css/humanos.css'
		});
		$("head").append( link ); 
    }else{
	var link = $("<link>");
		link.attr({
        	type: 'text/css',
        	rel: 'stylesheet',
        	href: 'css/quimeras.css'
		});
		$("head").append( link ); 	
    }
}
ControladorUsuario.crearUser=function(){
	
}
