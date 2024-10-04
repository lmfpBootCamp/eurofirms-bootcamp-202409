// JAVASCRIPT - ARRAY.SHIFT()
// La función shift() elimina el elemento de la posición inicial de un array


// Definimos la función
function removeFirtsElement(object){
    //La función no recibe ningún elemento
    //Para eliminar el primer elemento la función lo va a 
    //substituir con el elemento posterior
    for (var i = 0; i < object.length; i++) {
        //El elemento actual pasa a ser el elemento que lo precede
        object[i] = object[i + 1]
    }

    //Elimina el último elemento que se ha quedado sin valor
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
console.log('Devuelve numbers antes de eliminar el primer elemento', numbers)
console.log('Elimina el primer elmento del objeto', removeFirtsElement(numbers))
console.log('Devuelve numbers después de eliminar el primero', numbers)
//================================================================================