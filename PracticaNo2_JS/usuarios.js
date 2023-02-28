var flag = false;
$(document).ready(function() {
    $('#user_form').submit(function(event) {
    limpiarForm();

      event.preventDefault();
      var form_data = $(this).serialize();
      var name = $('#name').val();
      var lastname = $('#lastname').val();
      var user = $('#user').val();
      var email = $('#email').val();
      var contra1 = $('#contra1').val();
      var contra2 = $('#contra2').val();
      var checkboxes = $('input[type="checkbox"]:checked');

      const valores = [];
      checkboxes.each(function() {
        valores.push($(this).val());
      });
      //console.log(valores);
      
      if (!name) {
        $('#name').addClass("is-invalid");
      }else{
        $('#name').removeClass("is-invalid");
        $('#name').addClass("is-valid");
      }
      if (!lastname) {
        $('#lastname').addClass("is-invalid");
      }else{
        $('#lastname').removeClass("is-invalid");
        $('#lastname').addClass("is-valid");
      }

      if (!user) {
        $('#user').addClass("is-invalid");
      }else{
        $('#user').removeClass("is-invalid");
        $('#user').addClass("is-valid");
      }

      if (!email) {
        $('#email').addClass("is-invalid");
      }else{
        $('#email').removeClass("is-invalid");
        $('#email').addClass("is-valid");
      }

      if ((contra1 != contra2) || (!contra1) || (!contra2)){
        $('#contra2').addClass("is-invalid");
        $('#contra1').addClass("is-invalid");
      }else{
        $('#contra2').removeClass("is-invalid");
        $('#contra1').removeClass("is-invalid");
        $('#contra2').addClass("is-valid");
        $('#contra1').addClass("is-valid");
      }
      
      if (checkboxes.length < 1) {
        //alert('Por favor seleccione al menos un hobby');
        $("#label_check").html("Por favor seleccione al menos un Hobby");
        $("#label_check").css("color","red");
      }else{
        $("#label_check").html("Seleccionar Hobbies");
        $("#label_check").css("color","black");
      }

      if($('#name').hasClass("is-valid") && $('#lastname').hasClass("is-valid") && $('#user').hasClass("is-valid")&& $('#email').hasClass("is-valid")&& $('#contra1').hasClass("is-valid")&& $('#contra2').hasClass("is-valid") && checkboxes.length >= 1){
        var str = "<label> Nombre: "+name+"<br> Apellido: "+lastname+"<br> Usuario: "+user+"<br> Email: "+email+"<br> Contraseña: "+contra1+"<br> Hobbies: "+valores+"</label>";
        Swal.fire({
            icon: 'success',
            title: 'Usuario Registrado',
            html: str
          })
      }


      });
});

function limpiarForm(){
    $('#name').removeClass("is-invalid");
    $('#lastname').removeClass("is-invalid");
    $('#user').removeClass("is-invalid");
    $('#email').removeClass("is-invalid");
    $('#contra1').removeClass("is-invalid");
    $('#contra2').removeClass("is-invalid");

    $('#name').removeClass("is-valid");
    $('#lastname').removeClass("is-valid");
    $('#user').removeClass("is-valid");
    $('#email').removeClass("is-valid");
    $('#contra1').removeClass("is-valid");
    $('#contra2').removeClass("is-valid");

}


  