this.logueado = false;

$("#entrar").click(function(){
	if($("#usuario").val() == "Saita" && $("#Contraseña").val() == "117"){
		logueado = true;
		if(logueado == true){
			window.location = "./pages/Inicio.html"
		}
		
		}else{
			Swal.fire('Error');
	}
});
$("#galeria").click(function(){
window.location="../pages/Galeria.html"

});
$("#Salir").click(function(){
    window.location = "../Index.html";
});

window .addEventListener('load',function(){
	$('.container').fadeIn(100);
});

$("#prueba").click(function(){
	window.location = "../pages/prueba.html"
});
$("#pdfs").click(function(){
	window.location = "../pages/pdfs.html"
});