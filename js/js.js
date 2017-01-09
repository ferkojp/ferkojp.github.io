$(document).ready(function(){

	$("#contenido-menu-item-inn").click(function(){
		$("#innovacion").toggle();
		$("#auxiliar").hide();
		$("#genera").hide();
	});
	$("#contenido-menu-item-aux").click(function(){
		$("#auxiliar").toggle();
		$("#innovacion").hide();
		$("#genera").hide();
	});
	$("#contenido-menu-item-gen").click(function(){
		$("#genera").toggle();
		$("#auxiliar").hide();
		$("#innovacion").hide();
	});
});