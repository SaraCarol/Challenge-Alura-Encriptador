//ELEMENTOS HTML
const classMensaje = document.querySelector(".mensaje-final")
const textArea = document.querySelector(".text-area")
const divNoMensaje = document.querySelector(".no-hay-mensaje")

const botonEncriptar = document.querySelector(".boton-encriptar")
const botonDesencriptar = document.querySelector(".boton-desencriptar")
const botonCopiar = document.querySelector(".boton-copiar")

textArea.focus();
botonCopiar.style.display = "none"

var llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

//ENCRIPTACIÓN

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(fraseEncriptar){
    fraseEncriptar = fraseEncriptar.toLowerCase()
    for (let i = 0; i < llaves.length; i++) {
        if (fraseEncriptar.includes(llaves[i][0])){
            fraseEncriptar = fraseEncriptar.replaceAll(llaves[i][0], llaves[i][1])
        }
    }
    return fraseEncriptar
}

function btnEncriptar(){
    var textoInicial = textArea.value
    if(textoInicial.length == 0){
        swal("Ops", "Debes ingresar un texto", "warning");
    } else{
        var textoNormal = textoInicial.normalize("NFD").replace(/[\u0300-\u036f]/g,"")
        const textoEncriptado = encriptar(textoNormal)
        mensajeFinal(textoEncriptado)
        textArea.value = ""
    }   
}

//DESENCRIPTACIÓN
function desencriptar(fraseDesencriptar){
    fraseDesencriptar = fraseDesencriptar.toLowerCase()
    for (let i = 0; i < llaves.length; i++) {
        if (fraseDesencriptar.includes(llaves[i][1])){
            fraseDesencriptar = fraseDesencriptar.replaceAll(llaves[i][1], llaves[i][0])
        }
    }
    return fraseDesencriptar
}

function btnDesencriptar(){
    var textoInicial = textArea.value
    if(textoInicial.length == 0){
        swal("Ops", "Debes ingresar un texto", "warning");
    } else {
        var textoNormal = textoInicial.normalize("NFD").replace(/[\u0300-\u036f]/g,"")
        const textoDesencriptado = desencriptar(textoNormal)
        mensajeFinal(textoDesencriptado)
        textArea.value = ""
    }
}

//RESULTADO
function mensajeFinal(resultado){
    divNoMensaje.style.display = "none"
    botonCopiar.style.display = "block"
    classMensaje.value = resultado
    textArea.focus();
}

//COPIAR TEXTO
function copiarTexto(){
    textoCopiar = classMensaje.value
    navigator.clipboard.writeText(textoCopiar);
    swal('Copiado')
    classMensaje.value = ""
    divNoMensaje.style.display = "block"
    botonCopiar.style.display = "none"
    textArea.focus();
}

//BOTONES
botonEncriptar.addEventListener("click", btnEncriptar)
botonDesencriptar.addEventListener("click", btnDesencriptar)
botonCopiar.addEventListener("click", copiarTexto)