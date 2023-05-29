function encriptar() {
    let texto = document.getElementById("texto").value;
    let txt = document.getElementById("txt");
    let txt1 = document.getElementById("txt1");
    let txt2 = document.getElementById("txt2");
    let txt3 = document.getElementById("txt3");
    let muñeco = document.getElementById("muñeco");
   
    //remplazar letras por palabras
    let txtCifrado = texto
      .replace(/e/gim, "enter")
      .replace(/o/gim, "ober")
      .replace(/i/gim, "imes")
      .replace(/a/gim, "ai")
      .replace(/u/gim, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("mensaje").value = txtCifrado;
      document.getElementById("txt").style.display="none";
      document.getElementById("txt1").style.display="block";
      document.getElementById("txt2").style.display="none";
      document.getElementById("txt3").style.display="none";
      document.getElementById("copy").style.display="block";
      muñeco.src = "img/encriptado.jpg";
      return;
    } else {
      muñeco.src = "img/Muñeco.png";
      document.getElementById("txt").style.display="block";
      document.getElementById("txt1").style.display="none";
      document.getElementById("txt2").style.display="block";
      document.getElementById("txt3").style.display="none";
      document.getElementById("mensaje").value = "";
      document.getElementById("copy").style.display="none";
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("mensaje").value;
    //remplazar palabras por letras
    let txtCifrado = texto
      .replace(/enter/gim, "e")
      .replace(/ober/gim, "o")
      .replace(/imes/gim, "i")
      .replace(/ai/gim, "a")
      .replace(/ufat/gim, "u");
  
    if (texto.length != 0) {
      document.getElementById("mensaje").value = txtCifrado;
      document.getElementById("txt").style.display="none";
      document.getElementById("txt1").style.display="none";
      document.getElementById("txt2").style.display="none";
      document.getElementById("txt3").style.display="block";
      document.getElementById("copy").style.display="block";
      muñeco.src = "img/desencriptado.jpg";
      return;
    } else {
      muñeco.src = "img/Muñeco.png";
      document.getElementById("mensaje").value = "";
      document.getElementById("txt").style.display="block";
      document.getElementById("txt1").style.display="none";
      document.getElementById("txt2").style.display="block";
      document.getElementById("txt3").style.display="none";
      document.getElementById("copy").style.display="none";
    }
  }
  
  function copiar() {
    var contenido = document.getElementById("mensaje");
    contenido.select();
    contenido.setSelectionRange(0, 999999);
    document.execCommand("copy");
  }
   function limpiar() {
    document.getElementsByClassName("texto")[0].value = "";
    document.getElementsByClassName("mensaje")[0].value = "";
    muñeco.src = "img/Muñeco.png";
    document.getElementById("txt").style.display="none";
    document.getElementById("txt1").style.display="none";
    document.getElementById("txt2").style.display="none";
    document.getElementById("txt3").style.display="none";
    document.getElementById("copy").style.display="none";
    copiar().reset;
    
  }