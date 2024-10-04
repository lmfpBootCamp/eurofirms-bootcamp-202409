// JAVASCRIPT - ARRAY.UNSHIFT()
// La función unshift() añade un elemento en la posición inicial de un array


// Definimos la función
function addFirstElement(object, element) {
    //Para poder insertar un elemento en la primera posición hay 
    //que empujar hacia adelante los elementos existentes para esi
    //lo mejor es mejor un bucle que recorra el objeto
    for (var i = object.length; i > 0; i--) {
        //El elemento actual pasa a ser el elemento que lo precede
        object[i] = object[i - 1]
    }

    //Una vez recolocados todos los elementos se añade el nuevo elemento
    object[0] = element

    //Actualiza el elemento length
    object.length++

    //Y lo devuelve por consola
    return object.length
}

// Definimos el objeto
var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}


//================================================================================
// Comandos a ejecutar
console.log('Devuelve numbers antes de añadir 111', numbers)
console.log('Longitud de numbers después de añadir el nuevo elemento', addFirstElement(numbers, 111))
console.log('numbers tras añadir 111', numbers)
//
console.log('Devuelve numbers antes de añadir 222', numbers)
console.log('Longitud de numbers después de añadir el nuevo elemento', addFirstElement(numbers, 222))
console.log('numbers tras añadir 222', numbers)
//================================================================================