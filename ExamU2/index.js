$(document).ready(function(){
    console.log("Ready!");

    $('#msform').submit(function(event){
       event.preventDefault();
       validar();
    });
});


function validar(){
    var user = $("#user").val();
    var contra = $("#contra").val();
    limpiar();

    if(user=="jperez" && contra=="mipssw"){
        $('#user').css("border-color", "green");
        $('#contra').css("border-color", "green");
        $('#user').addClass("is-valid");
        $('#contra').addClass("is-valid");
        //Pagina clientes
        window.location.href = "dashboard_clientes.html";

    }else if(user=="vendedor" && contra=="mipssw-vend"){
        $('#user').css("border-color", "green");
        $('#contra').css("border-color", "green");
        $('#user').addClass("is-valid");
        $('#contra').addClass("is-valid");
        //Pagina vendedor
        window.location.href = "vendedor.html";


    }else{
        $('#user').css("border-color", "red");
        $('#contra').css("border-color", "red");
        $('#user').addClass("is-invalid");
        $('#contra').addClass("is-invalid");
    }

    if($('#user').hasClass("is-invalid") && $('#user').hasClass("is-invalid")){
        Swal.fire({
            //var str="texto";
            icon: 'error',
            title: 'Datos incorrectos'
            //html: str
          })
    }

      
}

function limpiar(){
    $('#user').removeClass("is-invalid");
    $('#contra').removeClass("is-invalid");

    $('#user').removeClass("is-valid");
    $('#contra').removeClass("is-valid");
}