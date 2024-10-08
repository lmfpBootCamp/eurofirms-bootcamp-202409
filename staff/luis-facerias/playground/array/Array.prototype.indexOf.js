// ARRAY.PROTOTYTPE.IndexOF


// The IndexOF method of the Array function,
// returns the position of the element in the Array

console.log('TEST Array.prototype.indexOf')

// Test with array of numbers
console.log('CASE add 400 to nums')

var nums = [100, 200, 300]
var length = nums.push(400)
console.log(nums)
// [ 100, 200, 300, 400 ]
console.log(length)
// 4



// Test with array of objects
console.log('CASE add char F to chars Array')

var chars = ['A', 'B', 'C', 'D', 'E']
var length = chars.push('F')
console.log(chars)
// [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log(length)
// 6

// Test inserting a group of elements into the Array
console.log('CASE add many elements in one call')

var colors = ['red', 'green', 'blue', 'magenta']
var length = colors.push('cyan', 'yellow', 'orange', 'pink')
console.log(colors)
/* [
  'red',    'green',
  'blue',   'magenta',
  'cyan',   'yellow',
  'orange', 'pink'
] */
console.log(length)
// 8
