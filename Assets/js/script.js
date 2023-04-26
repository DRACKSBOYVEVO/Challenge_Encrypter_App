// Función que encripta un texto
function encriptarTexto() {
  // Obtenemos el texto a encriptar
  const textoAEncriptar = document.getElementById("texto-a-encriptar").value;

  // Realizamos la encriptación
  let textoEncriptado = textoAEncriptar
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  // Mostramos el resultado en el HTML
  document.getElementById(
    "texto-cifrado"
  ).textContent = `Texto encriptado: ${textoEncriptado}`;

  // Muestra el panel de resultados
  document.getElementById("resultados").classList.remove("resultados-ocultos");
}

//Validated
function validarTextoEncriptar() {
  var texto = document.getElementById("texto-a-encriptar").value;
  var regex = /^[a-z]+$/;

  if (texto === "") {
    alert("El campo de texto a encriptar no puede estar vacío");
    return false;
  } else if (!regex.test(texto)) {
    alert(
      "El campo de texto a encriptar solo puede contener letras minúsculas y sin acentos"
    );
    return false;
  }

  return true;
}

// Función que desencripta un texto
function desencriptarTexto() {
  // Obtenemos el texto a desencriptar
  const textoADesencriptar = document.getElementById(
    "texto-a-desencriptar"
  ).value;

  // Realizamos la desencriptación
  let textoDesencriptado = textoADesencriptar
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  // Mostramos el resultado en el HTML
  document.getElementById(
    "texto-desencriptado"
  ).textContent = `Texto desencriptado: ${textoDesencriptado}`;

  // Muestra el panel de resultados
  document.getElementById("resultados").classList.remove("resultados-ocultos");
}

//Validated
function validarTextoDesencriptar() {
  var textoDesencriptar = document.getElementById("texto-a-desencriptar").value;

  // Comprobar si el input está vacío
  if (textoDesencriptar === "") {
    alert("El campo de texto a desencriptar no puede estar vacío");
    return false;
  }

  //Comprobar si el texto contiene caracteres especiales o numéricos
  if (!/^[a-zA-Z\s]*$/.test(textoDesencriptar)) {
    alert(
      "El campo de texto a desencriptar solo puede contener letras sin acentos y espacios"
    );
    return false;
  }

  return true;
}

// Obtenemos los botones de encriptar y desencriptar
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

// Añadimos los listeners a los botones para llamar las funciones correspondientes
btnEncriptar.addEventListener("click", encriptarTexto);
btnDesencriptar.addEventListener("click", desencriptarTexto);
