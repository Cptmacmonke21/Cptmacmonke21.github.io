function contar(){
    function contarPalabrasUnicas(parrafo) {
        // Convertir el párrafo a minúsculas para ignorar mayúsculas y minúsculas
        parrafo = parrafo.toLowerCase();
    
        // Dividir el párrafo en palabras
        const palabras = parrafo.split(/\s+/);
    
        // Crear un conjunto para realizar un seguimiento de las palabras únicas
        const palabrasUnicas = new Set();
    
        // Iterar sobre las palabras en el párrafo
        palabras.forEach((palabra) => {
            // Eliminar signos de puntuación si es necesario
            palabra = palabra.replace(/[.,!?()[]{}:;"']/g, '');
    
            // Verificar si la palabra no está vacía antes de agregarla al conjunto
            if (palabra.trim() !== '') {
                palabrasUnicas.add(palabra);
            }
        });
    
        // Contar la cantidad de palabras únicas
        const cantidadPalabrasUnicas = palabrasUnicas.size;
    
        return cantidadPalabrasUnicas;
    }
    

    // Obtener elementos HTML
    const form = document.getElementById('form');
    const parrafoInput = document.getElementById('parrafo');
    const resultadoP = document.getElementById('words');

    // Agregar un evento al botón para contar palabras únicas
    const contarBtn = document.getElementById('contarBtn');
    contarBtn.addEventListener('click', function () {
        const parrafo = parrafoInput.value;
        const cantidad = contarPalabrasUnicas(parrafo);
        resultadoP.textContent = `Hay ${cantidad} palabras únicas en el párrafo.`;
    });}

// acá inicia la segunda función de la sección 2


    function entrar(){
            var contraseña = document.getElementById("password").value;

            // Definir las reglas de validación
            var longitudMinima = 8;
            var contieneMayuscula = /[A-Z]/.test(contraseña);
            var contieneNumero = /[0-9]/.test(contraseña);
            var noContieneEspacios = !/\s/.test(contraseña);

            // Verificar si la contraseña cumple con las reglas
            if (contraseña.length < longitudMinima) {
                mostrarMensaje("La contraseña debe tener al menos " + longitudMinima + " caracteres.");
            } else if (!contieneMayuscula) {
                mostrarMensaje("La contraseña debe contener al menos una letra mayúscula.");
            } else if (!contieneNumero) {
                mostrarMensaje("La contraseña debe contener al menos un número.");
            } else if (!noContieneEspacios) {
                mostrarMensaje("La contraseña no debe contener espacios en blanco.");
            } else {
                mostrarMensaje("La contraseña es válida.");
            }
        }

        function mostrarMensaje(mensaje) {
            document.getElementById("mensajeError").textContent = mensaje;
        }

        //sección 3

       function inspeccionar() {
    var cadena1 = document.getElementById("cadena1").value.toLowerCase();
    var cadena2 = document.getElementById("cadena2").value.toLowerCase();

    // Verificar si los campos están vacíos o solo contienen espacios en blanco
    if (cadena1.trim() === '' || cadena2.trim() === '') {
        document.getElementById("resultado").textContent = 'Es necesario escribir ambos textos'
    } else if (esAnagrama(cadena1, cadena2)) {
        document.getElementById("resultado").textContent = "¡Son anagramas!";
    } else {
        document.getElementById("resultado").textContent = "No son anagramas.";
    }
}

function esAnagrama(cadena1, cadena2) {
    // Eliminar espacios y convertir a arrays de caracteres
    var arr1 = cadena1.replace(/\s/g, "").split("");
    var arr2 = cadena2.replace(/\s/g, "").split("");

    // Verificar si tienen la misma longitud
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Ordenar los arrays y comparar
    arr1.sort();
    arr2.sort();

    // Comparar los arrays ordenados
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

        //sección 4

        function chngV() {
            var cadena = document.getElementById("cadena").value;
            var caracter = document.getElementById("caracter").value;
        
            // Utiliza una expresión regular para buscar todas las vocales y reemplazarlas
            var resultado = cadena.replace(/[aeiouAEIOU]/g, caracter);
        
            document.getElementById("reemplazo").textContent = " " + resultado;
        }

        //sección 5
        function search(){
    var cadena = document.getElementById("strin").value.toLowerCase();
            var palabraClave = document.getElementById("Clave").value.toLowerCase();

            // Utiliza indexOf para buscar la palabra clave en la cadena
            var encontrado = cadena.includes(palabraClave);

            if (encontrado) {
                document.getElementById("search").textContent = "La palabra clave se encontró en la cadena.";
            } else {
                document.getElementById("search").textContent = "La palabra clave no se encontró en la cadena.";
            }
}
//sección 6
function contador() {
    var frase = document.getElementById("frase").value;
    // Utiliza split con una expresión regular para dividir la frase
    var palabras = frase.split(/\s+|\W+/);
    // Filtra las palabras vacías (espacios en blanco) del array
    palabras = palabras.filter(function(palabra) {
        return palabra.trim() !== "";
    });
    var numeroDePalabras = palabras.length;

    document.getElementById("palabras").textContent = "Número de palabras: " + numeroDePalabras;
}
//seccion 7
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// Función para usar la inversión en una cadena ingresada por el usuario
function invertirTexto() {
    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoInvertido = invertirCadena(textoOriginal);
    document.getElementById("textoInvertido").textContent =  textoInvertido;
}
//seccion 8 

var frutas = ["manzana", "banano", "naranja", "uva", "pera"];

function verificar() {
    var nombreIngresado = document.getElementById("nombreFruta").value.toLowerCase();

    // Verificar si el nombre ingresado está en el array de frutas
    if (frutas.includes(nombreIngresado)) {
        document.getElementById("frutiFind").textContent = "¡La fruta está en la lista!";
    } else {
        document.getElementById("frutiFind").textContent = "La fruta no está en la lista.\n Lo sentimos mucho";
    }
}
//seccion 9

function convertir() {
    
        var cadena = document.getElementById("chain").value;

        if (cadena.trim() === '') {
            // Si la cadena está vacía o solo contiene espacios, muestra un mensaje de error
            document.getElementById("mayus").textContent = "La cadena está vacía.";
            document.getElementById("minus").textContent = " La cadena está vacía.";
        } else {
            // Convertir la cadena a mayúsculas y minúsculas
            var cadenaMayusculas = cadena.toUpperCase();
            var cadenaMinusculas = cadena.toLowerCase();

            // Mostrar las cadenas convertidas
            document.getElementById("mayus").textContent =  cadenaMayusculas;
            document.getElementById("minus").textContent =  cadenaMinusculas;
        }
    }

    //seccion 10

    function length() {
        var oracion = document.getElementById("oracion").value;
        var palabras = oracion.split(" ");
        var longitudPalabras = [];

        // Calcular la longitud de cada palabra
        for (var i = 0; i < palabras.length; i++) {
            var palabra = palabras[i];
            var longitud = palabra.length;
            longitudPalabras.push("'"+ palabra + "' tiene " + longitud + " letras.");
        }

        // Mostrar las longitudes de las palabras
        document.getElementById("longitud").textContent = longitudPalabras.join("\n");
    }
    //seccion 11
    function duplicarNumeros() {
        var numerosInput = document.getElementById("numeros").value;
        var numerosArray = numerosInput.split(',').map(function(numero) {
            return parseInt(numero.trim());
        });

        // Utilizar la función map para duplicar cada elemento
        var numerosDuplicados = numerosArray.map(function(numero) {
            return numero * 2;
        });

        // Mostrar el array resultante en HTML
        var resultadoHTML = document.getElementById("arrays");
        resultadoHTML.innerHTML = '';
        numerosDuplicados.forEach(function(numero) {
            var listItem = document.createElement("li");
            listItem.textContent = numero;
            resultadoHTML.appendChild(listItem);
        });
    }
    //seccion 12
    function cambiarMayusculasMinisculas(palabra) {
        var palabraModificada = "";
        for (var i = 0; i < palabra.length; i++) {
            var caracter = palabra[i];
            if (caracter === caracter.toUpperCase()) {
                palabraModificada += caracter.toLowerCase();
            } else {
                palabraModificada += caracter.toUpperCase();
            }
        }
        return palabraModificada;
    }

    function modificarPalabras() {
        var inputPalabras = document.getElementById("inputPalabras").value;
        var palabras = inputPalabras.split(',').map(function(palabra) {
            return palabra.trim();
        });

        // Mostrar palabras originales en HTML
        var palabrasOriginalesHTML = document.getElementById("palabrasOriginales");
        palabrasOriginalesHTML.innerHTML = '';
        palabras.forEach(function(palabra) {
            var listItem = document.createElement("li");
            listItem.textContent = palabra;
            palabrasOriginalesHTML.appendChild(listItem);
        });

        // Utilizar la función map para modificar las palabras
        var palabrasModificadas = palabras.map(cambiarMayusculasMinisculas);

        // Mostrar palabras modificadas en HTML
        var palabrasModificadasHTML = document.getElementById("palabrasModificadas");
        palabrasModificadasHTML.innerHTML = '';
        palabrasModificadas.forEach(function(palabra) {
            var listItem = document.createElement("li");
            listItem.textContent = palabra;
            palabrasModificadasHTML.appendChild(listItem);
        });
    }