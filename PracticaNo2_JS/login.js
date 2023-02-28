$(document).ready(function() {
    $('#form_login').submit(function(event) {
    limpiarForm();

      event.preventDefault();
      var form_data = $(this).serialize();
      var usuario = $('#usuario').val();
      var contra = $('#contra').val();
     

      if (usuario != "admin") {
        $('#usuario').addClass("is-invalid");
      }else{
        $('#usuario').removeClass("is-invalid");
        $('#usuario').addClass("is-valid");
      }
      if (contra != "admin") {
        $('#contra').addClass("is-invalid");
      }else{
        $('#contra').removeClass("is-invalid");
        $('#contra').addClass("is-valid");
      }

      if($('#usuario').hasClass("is-valid") && $('#contra').hasClass("is-valid")){
        window.location.href = "dashboard.html";
      }


      });
});

function limpiarForm(){
    $('#usuario').removeClass("is-invalid");
    $('#contra').removeClass("is-invalid");

    $('#usuario').removeClass("is-valid");
    $('#contra').removeClass("is-valid");
    
}


  