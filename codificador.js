function codificar() { 
  var mensaje = document.getElementById("mensaje").value.toLowerCase();
  
  var cifrado = mensaje.replace(/e/gim, "enter");
  var cifrado = cifrado.replace(/i/gim, "imes");
  var cifrado = cifrado.replace(/a/gim, "ai");
  var cifrado = cifrado.replace(/o/gim, "ober");
  var cifrado = cifrado.replace(/u/gim, "ufat");
  var cifrado = cifrado.replace(/ /gim, " ");
    
  document.getElementById("imgmuneco").style.display = "none";
  document.getElementById("no_encontrado").style.display = "none";
  document.getElementById("resultado").innerHTML= cifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit"
  
}

function decodificar() {        
  var mensaje = document.getElementById("mensaje").value.toLowerCase();
  cifrado = mensaje.replace(/enter/gi, "e");
  cifrado = cifrado.replace(/imes/gi, "i");
  cifrado = cifrado.replace(/ai/gi, "a");
  cifrado = cifrado.replace(/ober/gi, "o");
  cifrado = cifrado.replace(/ufat/gi, "u");
  cifrado = cifrado.replace(/ /gi, " ");
  
  document.getElementById("imgmuneco").style.display = "none";
  document.getElementById("no_encontrado").style.display = "none";
  document.getElementById("resultado").innerHTML= cifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit"
}


function copiar() {
 var contenido = document.querySelector("#resultado");
 contenido.select();
 document.execCommand("copy");  
}

var button = document.querySelector(".codificar");
 button.onclick = codificar;

 var button2 = document.querySelector(".decodificar");
 button2.onclick = decodificar;
 var button3 = document.querySelector(".copiar");
 button3.onclick = copiar;