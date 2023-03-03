var flag = false;
$(document).ready(function() {
    $('#productos_form').submit(function(event) {
    limpiarForm();

      event.preventDefault();
      var form_data = $(this).serialize();
      var code = $('#code').val();
      var name = $('#name').val();
      var cate = $('#cate').val();
      var venta = $('#venta').val();
      var compra = $('#compra').val();
      
    
      if (!code) {
        $('#code').addClass("is-invalid");
      }else{
        $('#code').removeClass("is-invalid");
        $('#code').addClass("is-valid");
      }
      if (!name) {
        $('#name').addClass("is-invalid");
      }else{
        $('#name').removeClass("is-invalid");
        $('#name').addClass("is-valid");
      }

      /*if (!cate) {
        $('#cate').addClass("is-invalid");
      }else{
        $('#cate').removeClass("is-invalid");
        $('#cate').addClass("is-valid");
      }*/

      cate = $("#selector_cate").val();

      if (!venta || venta<=0) {
        $('#venta').addClass("is-invalid");
      }else{
        $('#venta').removeClass("is-invalid");
        $('#venta').addClass("is-valid");
      }

      if (!compra || compra<=0) {
        $('#compra').addClass("is-invalid");
      }else{
        $('#compra').removeClass("is-invalid");
        $('#compra').addClass("is-valid");
      }

      if($('#code').hasClass("is-valid") && $('#name').hasClass("is-valid") && $('#venta').hasClass("is-valid")&& $('#compra').hasClass("is-valid")){
        flag = true;
        var str = "<label> Código: "+code+"<br> Nombre: "+name+"<br> Categoría: "+cate+"<br> Precio de Venta: "+venta+"<br> Precio de Compra: "+compra+"</label>";
        Swal.fire({
            icon: 'success',
            title: 'Producto Registrado',
            html: str
          })
      }


      });
});

function limpiarForm(){
    $('#code').removeClass("is-invalid");
    $('#name').removeClass("is-invalid");
    $('#cate').removeClass("is-invalid");
    $('#venta').removeClass("is-invalid");
    $('#compra').removeClass("is-invalid");
    

    $('#code').removeClass("is-valid");
    $('#name').removeClass("is-valid");
    $('#cate').removeClass("is-valid");
    $('#venta').removeClass("is-valid");
    $('#compra').removeClass("is-valid");

}

  