//esto agrega el valor del boton de la calculadora a la pantalla 

function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// esta funcion borra lo que este en la pantalla
function borrar(){
document.getElementById('pantalla').value = "";
};

// esta funcion calcula 
function calcular(){

    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
};

function borrarUnSoloNumero() {
    const pantalla = document.getElementById("pantalla");
    const contenido = pantalla.value;
    document.getElementById("pantalla").value = contenido.slice(0, -1); // Elimina el último carácter
  };



  document.addEventListener("keydown", function(event) {
    if (event.key >= '0' && event.key <= '9') {
        document.getElementById('pantalla').value += event.key;
      var numero = event.key;
      console.log("Se presionó la tecla numérica: " + numero);
    }

    
  });
  
  