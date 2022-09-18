function countAandB(input) {
	var ctr = 0;
	//console.log(input.size);
	for(var i = 0; i < input.length; ++i) {
		if(input[i] == 'a' || input[i] == 'b') {
			++ctr;
		}
	}
	return ctr;
}
function toNumber(input) {
	var output = new Array(input.length);
	for(var i = 0; i < input.length; ++i) {
		output[i] = input[i].charCodeAt(0) - 96; // 96 is ASCII for 'a'-1
	}
	return output;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ lettersand 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1,3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
