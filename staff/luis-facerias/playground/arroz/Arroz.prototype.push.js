
// ARROZ.PROTOTYTPE.PUSH


// Implementation of the Arroz function push,
// to insert an element at the end of an object

var Arroz = function() { this.length = 0 }

/*Arroz.prototype.push = function (element) {
    this[this.length] = element
    this.length++
    return this.length
}*/

Arroz.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++){
        var element = arguments[i]
        this[this.length] = element
        this.length++
    }
    return this.length
}

console.log('TEST Arroz.prototype.push')
console.log('CASE add 400 to nums')

var nums = new Arroz
nums[0] = 100
nums[1] = 200
nums[2] = 300
nums.length = 3

var length = nums.push(400)
console.log(nums)
// Arroz { '0': 100, '1': 200, '2': 300, '3': 400, length: 4 }
console.log(length)
//4


console.log('CASE add F to chars')

var chars = new Arroz
chars[0] = 'A'
chars[1] = 'B'
chars[2] = 'C'
chars[3] = 'D'
chars[4] = 'E'
chars.length = 5

var length = chars.push('F')
console.log(chars)
// Arroz { '0': 'A', '1': 'B', '2': 'C', '3': 'D', '4': 'E', '5': 'F', length: 6 }
console.log(length)
// 6


console.log('CASE add multiple elements inside the array')

var chars = new Arroz
chars[0] = 'red'
chars[1] = 'green'
chars[2] = 'black'
chars[3] = 'blue'
chars[4] = 'magenta'
chars.length = 5

var length = chars.push('yellow', 'orange', 'pink', 'cyan')
console.log(chars)
//Arroz { '0': 'red', '1': 'green', '2': 'black', '3': 'blue', '4': 'magenta', '5': 'yellow', '6': 'orange', '7': 'pink', '8': 'cyan', length: 9 }
console.log(length)
// 9