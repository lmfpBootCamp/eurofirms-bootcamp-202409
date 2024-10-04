// JAVASCRIPT - ARRAY.POP()
// La función pop() elimina un elemento de la posición final de un array


// Definimos la función
function removeLastElement(object) {
    //La función no recibe ningún elemento
    //Para eliminar el último elemento la función simplemente lo elimina
    delete object[object.length - 1]

    //Actualiza el elemento length
    object.length--

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
console.log('Devuelve numbers antes de eliminar el último elemento', numbers)
console.log('Elimina el último elmento del objeto', removeLastElement(numbers))
console.log('Devuelve numbers después de eliminar el último', numbers)
//================================================================================