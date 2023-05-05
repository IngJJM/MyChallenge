function encriptar(){
    var texto=document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado=texto.replace(/e/igm,"enter");
    var txtCifrado=txtCifrado.replace(/o/igm,"ober");
    var txtCifrado=txtCifrado.replace(/i/igm,"imes");
    var txtCifrado=txtCifrado.replace(/a/igm,"ai");
    var txtCifrado=txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgContainer3").style.display="none";
    document.getElementById("txt").style.display="none";
    document.getElementById("txt2").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}
function desencriptar(){
    var texto=document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado=texto.replace(/enter/igm,"e");
    var txtCifrado=txtCifrado.replace(/ober/igm,"o");
    var txtCifrado=txtCifrado.replace(/imes/igm,"i");
    var txtCifrado=txtCifrado.replace(/ai/igm,"a");
    var txtCifrado=txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgContainer3").style.display="none";
    document.getElementById("txt").style.display="none";
    document.getElementById("txt2").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}
function copiar(){
    var contenido=document.querySelector("#txt2");
    contenido.select();

    document.execCommand("copy");
    alert("Se ha copiado!!!")
}