// JAVASCRIPT - ARRAY.PUSH()
// La función push() añade un elemento en la posición final de un array


// Definimos la función
function addElement(object, element) {
    // La función recibe un object, añade un nuevo elemento al final
    object[object.length] = element

    // Una vez ha añadido el último elemento actualiza la nueva dimensión
    object.length++
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
console.log('Prueba 1: añadir el número 3 al objeto numbers')
addElement(numbers, 3)
console.log('numbers actualizado: ', numbers)
console.log("Resultado esperado: { '0': 0, '1': 1, '2': 2, '3': 3, length: 4 }")
addElement(numbers, 100)
console.log('numbers actualizado: ', numbers)
//================================================================================