$(document).ready(function(){
  // Al hacer clic en una imagen
  $('.gallery img-fluid').click(function(){
    var id = $(this).data('id');
    console.log(id);
    
    // Crear carrusel de imágenes
    var carousel = $('<div id="carousel" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"></ol><div class="carousel-inner"></div><a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Anterior</span></a><a class="carousel-control-next" href="#carousel" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Siguiente</span></a></div>');
    $('.modal-content').append(carousel);
    
    // Agregar imágenes al carrusel
    $('.img-fluid').each(function(){
      var img_id = $(this).data('id');
      var img_src = $(this).attr('src');
      
      var indicator = $('<li data-target="#carousel" data-slide-to="' + (img_id-1) + '"></li>');
      var item = $('<div class="carousel-item"><img src="' + img_src + '"></div>');
      
      if(img_id == id){
        indicator.addClass('active');
        item.addClass('active');
      }
      
      $('#carousel .carousel-indicators').append(indicator);
      $('#carousel .carousel-inner').append(item);
    });
    
    // Mostrar modal
    $('#gallery-modal').modal('show');
    
    // Iniciar carrusel de imágenes
    $('#carousel').carousel();

  });
  
  // Cerrar modal al hacer clic en la X o en el botón Cerrar
  $('.close, .btn-close').click(function(){
    $('#gallery-modal').modal('hide');
    $('#carousel').remove();
    $('.modal-backdrop').removeClass('modal-backdrop fade show');
});
});

var backdrop = $('.modal-backdrop');
backdrop.remove();

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e){
    const id = e.target.dataset.id;
    if (id) {

        btns.forEach(function (btn){
            btn.classList.remove("active");
        });

        e.target.classList.add("active");

        articles.forEach(function (article) {
            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        const imagen = document.getElementById("imagen");
        //element.classList.remove("active");
        element.classList.add("active");
        if (id == "portafolio"){
            imagen.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/one-direction-1666782312.jpg";
        }else if (id == "nosotros"){
            imagen.src = "https://static.abc.es/media/cultura/2020/07/23/one-direction--644x362-U71754366881xay-1200x630@abc.jpg";
        }else if (id == "objetivos"){
            imagen.src = "https://elcomercio.pe/resizer/0ciLmU0uL1h3ujA5VmcqjC6gzek=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2IJE3AFWJNDOPH2J7Q7SK56S2Q.jpg";
        }
        
    }
});










