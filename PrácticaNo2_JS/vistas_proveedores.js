const productos_default = [
    {
      id: 1,
      nombre: "Liam",
      apellidop: "Styles",
      apellidom: "Cox",
      email: "harry@gmail.com",
      telefono: "1234567890",
      direccion: "London",
      rfc: "2828",
      categoria: "Excelente",
    },
    {
      id: 2,
      nombre: "Niall",
      apellidop: "Tomlinson",
      apellidom: "Cox",
      email: "louis@gmail.com",
      telefono: "1234567890",
      direccion: "London",
      rfc: "2828",
      categoria: "Excelente",
    },
    {
      id: 3,
      nombre: "Louis",
      apellidop: "Payne",
      apellidom: "Paynex",
      email: "liam@gmail.com",
      telefono: "1234567890",
      direccion: "London",
      rfc: "2828",
      categoria: "Excelente",
    },
    {
      id: 4,
      nombre: "Zayn",
      apellidop: "Horan",
      apellidom: "Payne",
      email: "niall@gmail.com",
      telefono: "1234567890",
      direccion: "London",
      rfc: "2828",
      categoria: "Bueno",
    },
    {
      id: 5,
      nombre: "Luke",
      apellidop: "Horan",
      apellidom: "Malik",
      email: "zayn@gmail.com",
      telefono: "1234567890",
      direccion: "London",
      rfc: "2828",
      categoria: "Regular",
    },
    {
      id: 6,
      nombre: "Mike",
      apellidop: "Hemmings",
      apellidom: "Malik",
      email: "luke@gmail.com",
      telefono: "1234567890",
      direccion: "London",
      rfc: "2828",
      categoria: "Malo",
    },
    {
      id: 7,
      nombre: "Ashton",
      apellidop: "Clifford",
      apellidom: "Malik",
      email: "mike@gmail.com",
      telefono: "1234567890",
      direccion: "London",
      rfc: "2828",
      categoria: "Bueno",
    },
    {
      id: 8,
      nombre: "Calum",
      apellidop: "Queen",
      apellidom: "Queen",
      email: "oli@gmail.com",
      telefono: "1234567890",
      direccion: "New York",
      rfc: "2828",
      categoria: "Regular",
    },
    {
      id: 9,
      nombre: "Oliver",
      apellidop: "Queen",
      apellidom: "Irwin",
      email: "ash@gmail.com",
      telefono: "1234567890",
      direccion: "New York",
      rfc: "2828",
      categoria: "Malo",
    },
    {
      id: 10,
      nombre: "Liam",
      apellidop: "Queen",
      apellidom: "Hood",
      email: "cal@gmail.com",
      telefono: "1234567890",
      direccion: "New York",
      rfc: "2828",
      categoria: "Bueno",
    },
  ];

  $( document ).ready(function() {
    console.log( "ready!" );
    generarTabla();

    $("#gnrTble_button_todo").click(function(){
        generarTabla();
      });
    
  
  });

  function generarTabla(){
    limpiarTabla();
    for (var i = 0; i < productos_default.length; i++) {
      var row = "<tr>";
      row += "<td>" + productos_default[i]['id'] + "</td>"; // Clave
      row += "<td>" + productos_default[i]['nombre'] +" "+productos_default[i]['apellidop']+" "+productos_default[i]['apellidom']+ "</td>"; // Nombre
      row += "<td>" + productos_default[i]['email'] + "</td>"; // categoría
      row += "<td> " + productos_default[i]['telefono'] + "</td>"; // descripción
      row += "<td>" + productos_default[i]['direccion'] + "</td>"; // Precio
      row += "<td>" + productos_default[i]['rfc'] + "</td>"; // Precio
      row += "<td>" + productos_default[i]['categoria']+ "</td>"; // Imagen
      row += "</tr>";
      $("#tbodys tbody").append(row);
    }
  }
  
  function limpiarTabla(){
    $('#tbodys td').remove();
  }

  function filtrarTabla(categoria){
    limpiarTabla();
    
    for(var i=0;i<productos_default.length;i++){
      if(productos_default[i]['categoria']==categoria){
        var row = "<tr>";
        row += "<td>" + productos_default[i]['id'] + "</td>"; // Clave
        row += "<td>" + productos_default[i]['nombre'] +" "+productos_default[i]['apellidop']+" "+productos_default[i]['apellidom']+ "</td>"; // Nombre
        row += "<td>" + productos_default[i]['email'] + "</td>"; // categoría
        row += "<td> " + productos_default[i]['telefono'] + "</td>"; // descripción
        row += "<td>" + productos_default[i]['direccion'] + "</td>"; // Precio
        row += "<td>" + productos_default[i]['rfc'] + "</td>"; // Precio
        row += "<td>" + productos_default[i]['categoria']+ "</td>"; // Imagen
        row += "</tr>";
        $("#tbodys tbody").append(row);
        }
    }
  }