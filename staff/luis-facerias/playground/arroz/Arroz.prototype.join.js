// ARROZ.PROTOTYTPE.JOIN

// Implementation of the Arroz function join
// returns elements separated by commas

var Arroz = function () { this.length = 0 }

Arroz.prototype.join = function (separator) {

    var stringOfCars = ''
    separator === undefined ? separator = ',' : separator

    for (var i = 0; i < this.length; i++) {
        i === this.length - 1 ? separator = '' : separator
        // Join elements with comma separator
            stringOfCars += (this[i]) + separator
        }
        //console.log(stringOfCars)
        return stringOfCars
}

// Test with a values array
console.log('TEST Arroz.prototype.join')

console.log('CASE get elements separated by commas')

var car = new Arroz
car[0] = 'SEAT'
car[1] = 'Renault'
car[2] = 'Simca'
car[3] = 'Ford'
car[4] = 'Mercedes'
car.length = 5
var cars = car.join()
console.log(cars)
//SEAT,Renault,Simca,Ford,Mercedes


console.log('CASE get elements separated by not comma separator')

var car = new Arroz
car[0] = 'SEAT'
car[1] = 'Renault'
car[2] = 'Simca'
car[3] = 'Ford'
car[4] = 'Mercedes'
car.length = 5
var cars = car.join('/')
console.log(cars)
//SEAT/Renault/Simca/Ford/Mercedes


console.log('CASE get only one element')

var car = new Arroz
car[0] = 'SEAT'
car.length = 1
var cars = car.join('/')
console.log(cars)
//SEAT