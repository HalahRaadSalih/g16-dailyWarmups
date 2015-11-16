function reverseString(someString){
	console.log('After split' +someString.split(''));
	console.log('After split & reverse'+ someString.split('').reverse());
	console.log('After split, reverse & join' +someString.split('').reverse().join(''));

	return someString.split('').reverse().join("");
}

console.log(reverseString('Hello'));
