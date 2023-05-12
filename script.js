function encriptar(){
    var texto=document.getElementById("texto").value.toLowerCase();
    var txt=document.getElementById("txt");
    var txt2=document.getElementById("txt2");
    var muñeco=document.getElementById("muñeco");

    var txtCifrado=texto.replace(/e/igm,"enter");
    var txtCifrado=txtCifrado.replace(/o/igm,"ober");
    var txtCifrado=txtCifrado.replace(/i/igm,"imes");
    var txtCifrado=txtCifrado.replace(/a/igm,"ai");
    var txtCifrado=txtCifrado.replace(/u/igm,"ufat");

    if (document.getElementById("texto").value.length !=0){
        document.getElementById("txt").style.display="show";
        document.getElementById("mensaje").innerHTML=txtCifrado;
        document.getElementById("copiar").style.display="show";
        document.getElementById("copiar").style.display="inherit";
        txt.textContent="Texto encriptado exitosamente";
        txt2.textContent="";
        muñeco.src="./img/encriptado.jpg";
    }else{
        muñeco.src="img/Muñeco.png";
        txt.textContent="Ningún mensaje fue encontrado";
        txt2.textContent="Ingrese el texto que desees encriptar o desencriptar.";
        alert("Debes ingresar algún texto");
    }

}
function desencriptar(){
    var texto=document.getElementById("mensaje").value.toLowerCase();
    var txtCifrado=texto.replace(/enter/igm,"e");
    var txtCifrado=txtCifrado.replace(/ober/igm,"o");
    var txtCifrado=txtCifrado.replace(/imes/igm,"i");
    var txtCifrado=txtCifrado.replace(/ai/igm,"a");
    var txtCifrado=txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("muñeco").style.display="none";
    document.getElementById("txt").style.display="none";
    document.getElementById("mensaje").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}
function copiar(){
    var contenido=document.querySelector("#txt2");
    contenido.select();

    document.execCommand("copy");
    alert("Se ha copiado!!!")
}