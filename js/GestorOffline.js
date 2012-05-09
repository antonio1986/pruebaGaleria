/**
 * @author jlopezco
 */

var GestorOffline={
	listaSelecciones: null, 
}


//////////////////////////////////////////////////////////////////////////////////////
//			LISTADO DE NOTICIAS

//			TODO guardarlo tambien en una variable local, para no estar consultando
//			siempre el json. 
//////////////////////////////////////////////////////////////////////////////////////
/*
	Guarda en localstorage el usuario

*/
GestorOffline.guardarUsuario=function(id,user){

	if (typeof(localStorage) != 'undefined' ){
		//localStorage.removeItem(id);//Elimino los datos antiguos
		localStorage.setItem(id, JSON.stringify(user)); 		
	}
}

/*
	Obtiene el usuario
*/
GestorOffline.obtenerUsuario=function(id){
	if (typeof(localStorage) != 'undefined' && localStorage.getItem(id)!=null){
		return JSON.parse(localStorage.getItem(id));
	}
	
	return null; 
}