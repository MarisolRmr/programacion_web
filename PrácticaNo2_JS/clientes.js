var flag = false;
$(document).ready(function() {
    $('#clientes_form').submit(function(event) {
    limpiarForm();

      event.preventDefault();
      var form_data = $(this).serialize();
      var id = $('#id').val();
      var name = $('#name').val();
      var lastnameP = $('#lastnameP').val();
      var lastnameA = $('#lastnameA').val();
      var email = $('#email').val();
      
      var dir = $('#dir').val();
      var rfc = $('#rfc').val();
      
      if (!id) {
        $('#id').addClass("is-invalid");
      }else{
        $('#id').removeClass("is-invalid");
        $('#id').addClass("is-valid");
      }

      if (!rfc) {
        $('#rfc').addClass("is-invalid");
      }else{
        $('#rfc').removeClass("is-invalid");
        $('#rfc').addClass("is-valid");
      }

      if (!name) {
        $('#name').addClass("is-invalid");
      }else{
        $('#name').removeClass("is-invalid");
        $('#name').addClass("is-valid");
      }

      if (!lastnameP) {
        $('#lastnameP').addClass("is-invalid");
      }else{
        $('#lastnameP').removeClass("is-invalid");
        $('#lastnameP').addClass("is-valid");
      }

      if (!lastnameA) {
        $('#lastnameA').addClass("is-invalid");
      }else{
        $('#lastnameA').removeClass("is-invalid");
        $('#lastnameA').addClass("is-valid");
      }

      if (!email) {
        $('#email').addClass("is-invalid");
      }else{
        $('#email').removeClass("is-invalid");
        $('#email').addClass("is-valid");
      }

      var tel = $('#tel').val();
      var telRegex = /^\d{10}$/;

        if (telRegex.test(tel)) {
            $('#tel').removeClass('is-invalid');
            $('#tel').addClass('is-valid');
        }else {
            $('#tel').addClass('is-invalid');
        }
    

    if (!dir) {
        $('#dir').addClass("is-invalid");
      }else{
        $('#dir').removeClass("is-invalid");
        $('#dir').addClass("is-valid");
      }



      if($('#rfc').hasClass("is-valid") &&$('#id').hasClass("is-valid") &&$('#name').hasClass("is-valid") && $('#lastnameP').hasClass("is-valid") && $('#lastnameA').hasClass("is-valid") && $('#email').hasClass("is-valid")&& $('#tel').hasClass("is-valid")&& $('#dir').hasClass("is-valid")){
        //var str = "<label> Nombre: "+name+"<br> Apellido: "+lastname+"<br> Usuario: "+user+"<br> Email: "+email+"<br> Contraseña: "+contra1+"<br> Hobbies: "+valores+"</label>";
        Swal.fire({
            icon: 'success',
            title: 'Cliente Registrado'
            //html: str
          })
      }


      });
});

function limpiarForm(){
    $('#id').removeClass("is-invalid");
    $('#name').removeClass("is-invalid");
    $('#lastnameP').removeClass("is-invalid");
    $('#lastnameA').removeClass("is-invalid");
    $('#email').removeClass("is-invalid");
    $('#tel').removeClass("is-invalid");
    $('#dir').removeClass("is-invalid");
    $('#rfc').removeClass("is-invalid");

    $('#id').removeClass("is-valid");
    $('#name').removeClass("is-valid");
    $('#lastnameP').removeClass("is-valid");
    $('#lastnameA').removeClass("is-valid");
    $('#email').removeClass("is-valid");
    $('#tel').removeClass("is-valid");
    $('#dir').removeClass("is-valid");
    $('#rfc').removeClass("is-valid");

}


  