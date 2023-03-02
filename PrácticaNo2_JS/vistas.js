var jQueryTabla = $("tbodys");
       jQueryTabla.attr({
       id:"idtabla"});
       
function addRow(){
  var nuevoTr = "<tr bgcolor='FFFDC1'><th>Columna 1</th><th>Column 2</th><th>Columna 3</th></tr>";
  jQueryTabla.append(nuevoTr);
}
/*$("#contentTable").append(jQueryTabla);
$("#addRow").click(function(){
	addRow();
});*/

$("#contentTable").append(jQueryTabla);
addRow();