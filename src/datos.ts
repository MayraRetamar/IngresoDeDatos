let btnEnv = document.getElementById("btnEnv");
let formulario = document.forms[0];
let dato = formulario.dato;
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  // TU VODIGO VA AQUI
  console.log("La altura es ", dato.value);
});

rotulo.innerHTML = "Indique la altura de la persona:";
