$(document).ready(function() {
    $('#cate_form').submit(function(event) {
    limpiarForm();

      event.preventDefault();
      var form_data = $(this).serialize();
      var name = $('#name').val();
      var clave = $('#clave').val();
      
      if (!name) {
        $('#name').addClass("is-invalid");
      }else{
        $('#name').removeClass("is-invalid");
        $('#name').addClass("is-valid");
      }
      if (!clave) {
        $('#clave').addClass("is-invalid");
      }else{
        $('#clave').removeClass("is-invalid");
        $('#clave').addClass("is-valid");
      }

      if($('#clave').hasClass("is-valid") && $('#name').hasClass("is-valid")){
        flag = true;
        var str = "<label> Clave: "+clave+"<br> Nombre: "+name;
        Swal.fire({
            icon: 'success',
            title: 'Categoría Registrada',
            html: str
          })
      }


      });
});

function limpiarForm(){
    $('#name').removeClass("is-invalid");
    $('#clave').removeClass("is-invalid");
    
    $('#name').removeClass("is-valid");
    $('#clave').removeClass("is-valid");
  
}


  