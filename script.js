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
        document.getElementById("mensaje").innerHTML=txtCifrado;
        txt.textContent="Texto encriptado exitosamente";
        txt2.textContent="";
        muñeco.src="img/encriptado.jpg";
    }else{
        muñeco.src="img/Muñeco.png";
        txt.textContent="Ningún mensaje fue encontrado";
        txt2.textContent="Ingrese el texto que desees encriptar o desencriptar.";
        swal({
            title:"Debes ingresar algún texto", 
            icon:"warning",
            button:"OK"
        });
        document.getElementById("mensaje").value="";
    }

}
function desencriptar(){
    var texto=document.getElementById("mensaje").value.toLowerCase();
    var txtCifrado=texto.replace(/enter/igm,"e");
    var txtCifrado=txtCifrado.replace(/ober/igm,"o");
    var txtCifrado=txtCifrado.replace(/imes/igm,"i");
    var txtCifrado=txtCifrado.replace(/ai/igm,"a");
    var txtCifrado=txtCifrado.replace(/ufat/igm,"u");

    if (document.getElementById("texto").value.length !=0){
        document.getElementById("mensaje").innerHTML=txtCifrado;
        txt.textContent="Texto Desencriptado exitosamente";
        txt2.textContent="";
        muñeco.src="img/desencriptado.jpg";
    }else{
        muñeco.src="img/Muñeco.png";
        txt.textContent="Ningún mensaje fue encontrado";
        txt2.textContent="Ingrese el texto que desees encriptar o desencriptar.";
        swal({
            title:"Debes ingresar algún texto", 
            icon:"warning",
            button:"OK"
        });
        document.getElementById("mensaje").value="";
    }

}

function copiar(){
    var contenido=document.getElementById("mensaje");
    contenido.select();
    contenido.setSelectionRange(0, 999999);
    document.execCommand("copy");
}
