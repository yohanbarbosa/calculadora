## Funciones Principales

### `agregarALaPantalla(value)`

Esta función se encarga de agregar el valor proporcionado a la pantalla de la calculadora. Recibe un parámetro `value` que representa el valor que se debe agregar. Utiliza `document.getElementById('pantalla')` para obtener el elemento de la pantalla por su identificador y luego actualiza el valor del campo `value` concatenando el nuevo valor.

    function agregarALaPantalla(value) {
        document.getElementById('pantalla').value += value;
    }

### `calcular()`

La función `calcular()` se ejecuta cuando se presiona el botón de igual (=) en la calculadora. Primero, obtiene el valor actual de la pantalla utilizando `document.getElementById('pantalla').value`. Luego, utiliza la función `eval()` para evaluar la expresión matemática representada por el valor de la pantalla. El resultado se almacena en la variable `result`. Finalmente, se actualiza el valor de la pantalla con el resultado calculado.

    function calcular() {
        const valorPantalla = document.getElementById('pantalla').value;
        const result = eval(valorPantalla);
        document.getElementById('pantalla').value = result;
    }

Es importante tener en cuenta que el uso de `eval()` puede presentar riesgos de seguridad si se permite que los usuarios ingresen código arbitrario. En este caso, asumimos que el código solo se ejecutará en un entorno seguro.

### `limpiarPantalla()`

La función `limpiarPantalla()` se utiliza para borrar el contenido de la pantalla de la calculadora. Simplemente asigna una cadena vacía al campo `value` del elemento de la pantalla.

    function limpiarPantalla() {
        document.getElementById('pantalla').value = '';
    }

### `borrarUnSoloNumero()`
la funcion `borrarUnSoloNumero()` se utiliza para borrar el ultimo cararter del contenido de la pantalla mediante el metodo slice(), ya que `pantalla.value` devuelve el contenido actual de la pantalla, que es una cadena de texto que contiene los números y operadores ingresados. El método slice(0, -1) devuelve una nueva subcadena del contenido original, excluyendo el último carácter. En otras palabras, elimina el último carácter de la cadena. Esto se logra al especificar el índice inicial 0 y el índice final -1. El índice -1 representa el último carácter de la cadena.De esta manera, cada vez que presiones el botón "backspace", se eliminará el último número o operador ingresado en la pantalla.

    function borrarUnSoloNumero() {
    const pantalla = document.getElementById("pantalla");
    const contenido = pantalla.value;
    document.getElementById("pantalla").value = contenido.slice(0, -1); // Elimina el último carácter
  };


## Integración con HTML y CSS

Para utilizar estas funciones, asegúrate de tener un elemento HTML con el id "pantalla" que represente la pantalla de la calculadora. Puedes ver el código HTML y CSS correspondiente en los archivos proporcionados en el repositorio.

Recuerda que puedes personalizar la interfaz y agregar más funcionalidades según tus necesidades.

¡Ahora estás listo para crear tu propia calculadora en JavaScript!, diviértete explorando el mundo de la programación web.

### THANKS SERGIECODE ###