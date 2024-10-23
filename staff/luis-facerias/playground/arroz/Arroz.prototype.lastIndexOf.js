// ARROZ.PROTOTYTPE.LASTINDEXOF

// Implementation of the Arroz function lastIndexOf
// returns last array index where element can be found

var Arroz = function () { this.length = 0 }

Arroz.prototype.lastIndexOf = function (searchElement, fromIndex) {
    let indexSearched = -1

    for (var i = (fromIndex === undefined || fromIndex > this.length - 1 ? this.length - 1: fromIndex); i >= 0; i--) {
        this[i] === searchElement ? indexSearched = i : indexSearched
    }
    return indexSearched
}




// Test with a values array
console.log('TEST Arroz.prototype.lastIndexOf')

console.log('CASE get index from last element searched')

var cars = new Arroz
cars[0] = 'Renault'
cars[1] = 'Simca'
cars[2] = 'Talbot'
cars[3] = 'Daewo'
cars[4] = 'Suzuki'
cars[5] = 'Rover'
cars[6] = 'Pegaso'
cars[7] = 'BMW',
cars[8] = 'Talbot'
cars[9] = 'Daewo'
cars.length = 10
var element = cars.lastIndexOf('Talbot', 7)
console.log(element)