const productos_default = [
  {
    id: 1,
    nombre: "Starry Night Hoodie",
    categoria: "Hoodies",
    descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
    precio: 100.00,
    imagen: 'images/productos_1.png',
  },
  {
    id: 2,
    nombre: "Desert Sun Hoodie",
    categoria: "Hoodies",
    descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
    precio: 100.00,
    imagen: 'images/productos_2.png',
  },
  {
    id: 3,
    nombre: "5SOS5 PINK SWEATSHIRT",
    categoria: "Sweatshirt",
    descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
    precio: 90.00,
    imagen: 'images/productos_3.png',
  },
  {
    id: 4,
    nombre: "5SOS5 Football Jersey",
    categoria: "Sweatshirt",
    descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
    precio: 80.00,
    imagen: 'images/productos_4.png',
  },
  {
    id: 5,
    nombre: "5SOS5 Beanie",
    categoria: "Accesorios",
    descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
    precio: 30.00,
    imagen: 'images/productos_5.png',
  },
  {
    id: 6,
    nombre: "5SOS5 Woven Blanket",
    categoria: "Accesorios",
    descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
    precio: 30.00,
    imagen: 'images/productos_6.png',
  },
  {
    id: 7,
    nombre: "5SOS5 LIMITED EDITION MICHAEL CASSETTE",
    categoria: "Discos",
    descripcion: "Limited edition band member blue cassette complete with unique Michael artwork and QR code giving access to a secret mini-site filled with exclusive Michael content.",
    precio: 30.00,
    imagen: 'images/productos_7.png',
  },
  {
    id: 8,
    nombre: "5SOS5 LIMITED EDITION TSHIRT BOX SET",
    categoria: "Discos",
    descripcion: "Includes standard softpak cd with limited edition t-shirt",
    precio: 55.00,
    imagen: 'images/productos_8.png',
  },
  {
    id: 9,
    nombre: "5SOS5 MICHAEL CD",
    categoria: "Discos",
    descripcion: "LIMITED EDITION: Standard CD in Softpak with 24-page booklet and unique ???Michael??? album cover. Each comes with a album cover card with a stamped thumbprint from Michael.",
    precio: 18.00,
    imagen: 'images/productos_9.png',
  },
  {
    id: 10,
    nombre: "5SOS5 STANDARD CD",
    categoria: "Discos",
    descripcion: "CD in Softpak with 24-page booklet",
    precio: 18.00,
    imagen: 'images/productos_10.png',
  },
];

$( document ).ready(function() {
  console.log( "ready!" );

  generarTabla();

  $("#gnrTble_button_todo").click(function(){
    generarTabla();
  });

  /*$("#gnrTble_button").click(function(){
    generarTabla();
  });

  $("#gnrTble_button_limpar").click(function(){
    limpiarTabla();
  });*/

  $("#descargarpdf").on("click", function() {
    //libreria_jsPDF();
    libreria_pdfMaker();
  });

});

function generarTabla(){
  limpiarTabla();
  for (var i = 0; i < productos_default.length; i++) {
    var row = "<tr>";
    row += "<td>" + productos_default[i]['id'] + "</td>"; // Clave
    row += "<td>" + productos_default[i]['nombre'] + "</td>"; // Nombre
    row += "<td>" + productos_default[i]['categoria'] + "</td>"; // categor??a
    row += "<td style='width: 200px;'> " + productos_default[i]['descripcion'] + "</td>"; // descripci??n
    row += "<td>" + productos_default[i]['precio'] + "</td>"; // Precio
    row += "<td>  <img style='width: 200px;' src='"+productos_default[i]['imagen']+"'>"  + "</td>"; // Imagen
    row += "</tr>";
    $("#tbodys tbody").append(row);
  }
}

function limpiarTabla(){
  $('#tbodys td').remove();
}

function filtrarTabla(tipo){
  limpiarTabla();
  
  for(var i=0;i<productos_default.length;i++){
    if(productos_default[i]['categoria']==tipo){
      var row = "<tr>";
      row += "<td>" + productos_default[i]['id'] + "</td>"; // Clave
      row += "<td>" + productos_default[i]['nombre'] + "</td>"; // Nombre
      row += "<td>" + productos_default[i]['categoria'] + "</td>"; // categor??a
      row += "<td style='width: 200px;'> " + productos_default[i]['descripcion'] + "</td>"; // descripci??n
      row += "<td>" + productos_default[i]['precio'] + "</td>"; // Precio
      row += "<td>  <img style='width: 200px;' src='"+productos_default[i]['imagen']+"'>"  + "</td>"; // Imagen
      row += "</tr>";
    $("#tbodys tbody").append(row);
    }
  }
}

// librer??a PDFMaker
function libreria_pdfMaker(){
  var bodypdf = [
    ['Clave', 'Nombre', 'Categor??a','Descripci??n','Precio','Imagen',]
  ];

  for(var i = 0;i<productos_default.length;i++){
    var lista = [productos_default[i]['id'], productos_default[i]['nombre'], productos_default[i]['categoria'],productos_default[i]['descripcion'],productos_default[i]['precio'],productos_default[i]['imagen']];
    bodypdf.push(lista);
  }

  //console.log(bodypdf);
  
  var docDefinition = {
    content: [
      {
        text: 'Productos Registrados',
        style: 'header'
      },
      {
        style: 'table',
        table: {
          body: bodypdf
        }
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      table: {
        margin: [0, 5, 0, 15]
      }
    }
  };

  pdfMake.createPdf(docDefinition).download('Tabla_2030112.pdf');
}


