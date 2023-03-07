$( document ).ready(function() {
  $('#msform').submit(function(event){
    event.preventDefault();
    validar();
  });

});

function validar(){
  var id = $("#id").val();
  var name = $("#name").val();
  var des = $("#des").val();
  var precio = $("#precio").val();
  var fecha = $("#fecha").val();
  var notas = $("#notas").val();

  limpiar();

  if(!id){
    $("#id").css("border-color", "red");
    $('#id').addClass("is-invalid");
  }else{
    $("#id").css("border-color", "green");
    $('#id').removeClass("is-invalid");
    $('#id').addClass("is-valid");
  }

  if(!name){
    $("#name").css("border-color", "red");
    $('#name').addClass("is-invalid");
  }else{
    $("#name").css("border-color", "green");
    $('#name').removeClass("is-invalid");
    $('#name').addClass("is-valid");
    
  }

  if(!des){
    $("#des").css("border-color", "red");
    $('#des').addClass("is-invalid");
  }else{
    $("#des").css("border-color", "green");
    $('#des').removeClass("is-invalid");
    $('#des').addClass("is-valid");
  }

  if(!precio){
    $("#precio").css("border-color", "red");
    $('#precio').addClass("is-invalid");
  }else{
    $("#precio").css("border-color", "green");
    $('#precio').removeClass("is-invalid");
    $('#precio').addClass("is-valid");
  }

  if(!fecha){
    $("#fecha").css("border-color", "red");
    $('#fecha').addClass("is-invalid");
  }else{
    $("#fecha").css("border-color", "green");
    $('#fecha').removeClass("is-invalid");
    $('#fecha').addClass("is-valid");
  }

  if(!notas){
    $("#notas").css("border-color", "red");
    $('#notas').addClass("is-invalid");
  }else{
    $("#notas").css("border-color", "green");
    $('#notas').removeClass("is-invalid");
    $('#notas').addClass("is-valid");
  }

  if($('#id').hasClass("is-valid") && $('#name').hasClass("is-valid") && $('#des').hasClass("is-valid") && $('#precio').hasClass("is-valid") && $('#fecha').hasClass("is-valid") && $('#notas').hasClass("is-valid")){
    var str = "Id: "+id+"<br>Nombre: "+name+"<br>Descripción: "+des+"<br>Precio: "+precio+"<br>Fecha: "+fecha+"<br>Notas: "+notas
    Swal.fire({
          icon: 'success',
          title: 'Producto Agregado',
          html: str
          
        })
  }

    
}

function limpiar(){
  $('#id').removeClass("is-invalid");
  $('#name').removeClass("is-invalid");
  $('#des').removeClass("is-invalid");
  $('#precio').removeClass("is-invalid");
  $('#fecha').removeClass("is-invalid");
  $('#notas').removeClass("is-invalid");

  $('#id').removeClass("is-valid");
  $('#name').removeClass("is-valid");
  $('#des').removeClass("is-valid");
  $('#precio').removeClass("is-valid");
  $('#fecha').removeClass("is-valid");
  $('#notas').removeClass("is-valid");
}

function regresar(){
  window.location.href = "vendedor.html";
}
  
