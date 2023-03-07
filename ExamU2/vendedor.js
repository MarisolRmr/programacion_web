//se cargan los productos 
const productos_default = [
    {
      usuario:'Marisol',
      id: 1,
      nombre: "Starry Night Hoodie",
      categoria: "Hoodies",
      descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
      precio: 100.00,
      imagen: 'https://cdn.shopify.com/s/files/1/0002/8501/6129/products/StarryHoodie_Front_460x.png?v=1669395168',
    },
    {
      usuario:'Jhovan',
      id: 2,
      nombre: "Desert Sun Hoodie",
      categoria: "Hoodies",
      descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
      precio: 100.00,
      imagen: 'https://cdn.shopify.com/s/files/1/0002/8501/6129/products/DesertSunHoodie_Front_460x.png?v=1669394613',
    },
    {
      usuario:'kevin',
      id: 3,
      nombre: "5SOS5 PINK SWEATSHIRT",
      categoria: "Sweatshirt",
      descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
      precio: 90.00,
      imagen: 'https://cdn.shopify.com/s/files/1/0002/8501/6129/products/jerseyBackV2copy_460x.png?v=1669395020',
    },
    {
     usuario:'sonia',
      id: 4,
      nombre: "5SOS5 Football Jersey",
      categoria: "Sweatshirt",
      descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
      precio: 80.00,
      imagen: 'https://cdn.shopify.com/s/files/1/0002/8501/6129/products/dsvsadvsadvb5SOS5_merch-DROP2C-11copy_360x.png?v=1669053200',
    },
    {
    usuario:'Vanessa',
      id: 5,
      nombre: "5SOS5 Beanie",
      categoria: "Accesorios",
      descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
      precio: 30.00,
      imagen: 'https://cdn.shopify.com/s/files/1/0002/8501/6129/products/Untitled-2_8fa4f428-56c3-40e0-9505-6866b1626725_460x.png?v=1669396329',
    },
    {
        usuario:'nubia',
      id: 6,
      nombre: "5SOS5 Woven Blanket",
      categoria: "Accesorios",
      descripcion: "100% Cotton, Ringspun, super soft, heavyweight hoodie. Designed and manufactured in downtown Los Angeles",
      precio: 30.00,
      imagen: 'https://cdn.shopify.com/s/files/1/0002/8501/6129/products/5SOS5_merch-DROP2C-13copy_360x.png?v=1669053294',
    },
    {
        usuario:'Mauricio',
      id: 7,
      nombre: "5SOS5 LIMITED EDITION MICHAEL CASSETTE",
      categoria: "Discos",
      descripcion: "Limited edition band member blue cassette complete with unique Michael artwork and QR code giving access to a secret mini-site filled with exclusive Michael content.",
      precio: 30.00,
      imagen: 'https://cdn.shopify.com/s/files/1/0002/8501/6129/products/5SOS5_CDmocks_Luke_360x.png?v=1661763468',
    },
    {
        usuario:'Daniel',
      id: 8,
      nombre: "5SOS5 LIMITED EDITION TSHIRT BOX SET",
      categoria: "Discos",
      descripcion: "Includes standard softpak cd with limited edition t-shirt",
      precio: 55.00,
      imagen: 'https://cdn.shopify.com/s/files/1/0002/8501/6129/products/Calumcassettecopy_360x.jpg?v=1667895412',
    },
    {
        usuario:'Jorge',
      id: 9,
      nombre: "5SOS5 MICHAEL CD",
      categoria: "Discos",
      descripcion: "LIMITED EDITION: Standard CD in Softpak with 24-page booklet and unique “Michael” album cover. Each comes with a album cover card with a stamped thumbprint from Michael.",
      precio: 18.00,
      imagen: 'https://cdn.shopify.com/s/files/1/0002/8501/6129/products/Ashtoncassettecopy_360x.jpg?v=1667895419',
    },
    {
        usuario:'Liam',
      id: 10,
      nombre: "5SOS5 STANDARD CD",
      categoria: "Discos",
      descripcion: "CD in Softpak with 24-page booklet",
      precio: 18.00,
      imagen: 'https://cdn.shopify.com/s/files/1/0002/8501/6129/products/5SOS5_CDmocks_NFT-version_360x.png?v=1661763465',
    },
  ];
  
//una vez cargado el documento, se llamará a la función generar tabla
  $( document ).ready(function() {
    generarTabla();
  
    $("#gnrTble_button_todo").click(function(){
      generarTabla();
    });

    $("#add_prod").click(function(){
      add_prod();
    });

    $("#salir").click(function(){
      cerrarSesion();
    });
  
  });

  function add_prod(){
    window.location.href = "vendedor_add_prod.html";
  }

  function cerrarSesion(){
    window.location.href = "index.html";
  }
  
  // La función generar tabla, con ayuda d eun for realizará la estructura de la tabal en html.
  // En una variable, se almacenará la sintaxiss de la tabla en html y se estarán concatenando los 
  //productos establecidos anteriormente. 
  //Con la función append, se agregará toda la sintaxis, ya de la tabla, al boddy de la tabla que 
  // esta en el archivo clientes.html

  function generarTabla(){
    for (var i = 0; i < productos_default.length; i++) {
      var row = "<tr>";
      row += "<td style='width:200px; height:200px;'>" + productos_default[i]['usuario'] + "</td>"; // Clave
      row += "<td style='width:200px'>" + productos_default[i]['nombre'] + "</td>"; // Nombre
      row += "<td style='width:200px'>" + productos_default[i]['categoria'] + "</td>"; // categoría
      row += "<td style='width: 200px;height:200px;'> " + productos_default[i]['descripcion'] + "</td>"; // descripción
      row += "<td style='width:200px'> $" + productos_default[i]['precio'] + ".00</td>"; // Precio
      row += "<td> 30 de Marzo </td>"; // fecha
      row += "</tr>";
      $("#tbodys tbody").append(row);
    }
  }

  
  
  