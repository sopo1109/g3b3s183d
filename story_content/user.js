function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mj8lWPtd0D":
        Script1();
        break;
      case "61SYRqo3ssT":
        Script2();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencildatacloud){var player=GetPlayer(),targlink="https://cluelabs.com/stencil/display/widget-data-cloud-init?authtool=sl&v=1597698258&chart=MjQ1fDE1MjV8NWNjZGM2NDRlMzdhOTNlMWNkODA5MGQwNDYwZDU3Mzg";xhttp=new XMLHttpRequest,xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var t=this.responseText,e=document.getElementsByTagName("head")[0],a=document.createElement("script");e.appendChild(a),a.appendChild(document.createTextNode(t)),window.stencildatacloud=!0}},xhttp.open("GET",targlink,!0),xhttp.send()}

}

function Script2()
{
  var player = GetPlayer();
var nombre = player.GetVar("nombre");
var apellido = player.GetVar("apellido");
var curso = player.GetVar("curso");
var uno = player.GetVar("Ejercicio1");
var dos = player.GetVar("Ejercicio2");
var tres = player.GetVar("Ejercicio3");
var cuatro = player.GetVar("Ejercicio4");
var cinco = player.GetVar("Ejercicio5");
var def = player.GetVar("Definitiva");
var informacion = curso.concat(";",apellido," ",nombre,";",uno,";",dos,";",tres,";",cuatro,";",cinco,";",def);
CloudSet('info', informacion);
}

