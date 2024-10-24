// ARROZ.PROTOTYTPE.CONCAT

// Implementation of the Arroz function concat
// returns one or more merged arrays

var Arroz = function () { this.length = 0 }

Arroz.prototype.concat = function(values) {

    var finalArr = []

    // Insert in array first Arroz
    for (var i = 0; i < this.length; i++) {
        finalArr[i] = this[i]
    }
    // Append in finalArr other array
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            var dim_finalArr = finalArr.length
            for (var j = 0; j < arguments[i].length; j++){
                finalArr[dim_finalArr + j] = arguments[i][j]
            }
        }
    }
    return finalArr
}

// Check if concat merge two or more arrays
console.log('CASE merge two arrays')

var lowerChar = new Arroz
lowerChar[0] = 'a'
lowerChar[1] = 'b'
lowerChar[2] = 'c'
lowerChar[3] = 'd'
lowerChar[4] = 'e'
lowerChar.length = 5
//concatlowerChar = lowerChar.concat()
//console.log(concatlowerChar)
//[ 'a', 'b', 'c', 'd', 'e' ]


var upperChar = new Arroz
upperChar[0] = 'A'
upperChar[1] = 'B'
upperChar[2] = 'C'
upperChar[3] = 'D'
upperChar[4] = 'E'
upperChar.length = 5
//concatlowerChar = upperChar.concat(lowerChar)
//console.log(concatlowerChar)
// [ 'A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e' ]

var num = new Arroz
num[0] = '1'
num[1] = '2'
num[2] = '3'
num[3] = '4'
num[4] = '5'
num.length = 5
concatlowerChar = num.concat(lowerChar, upperChar)
console.log(concatlowerChar)
// [ '1', '2', '3', '4', '5', 'a', 'b', 'c', 'd', 'e', 'A', 'B', 'C', 'D', 'E' ]