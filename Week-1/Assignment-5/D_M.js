function count(input) {
	var res = new Object();
	for(var i of input) {
		//console.log(res.has(i), i, res);
		if(res.hasOwnProperty(i))
			++res[i];
		else
			res[i] = 1;
	}	
	return res;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
	var res = new Object();
	for(var i of input) {
		if(!res.hasOwnProperty(i.key))
			res[i.key] = 0;
		res[i.key] += i.value;
	}
	return res;
}
let input2 = [
{ key: "a", value: 3 },
{ key: "b", value: 1 },
{ key: "c", value: 2 },
{ key: "a", value: 3 },
{ key: "c", value: 5 },
];
console.log(groupByKey(input2));
