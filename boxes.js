var input = 
"+--------------------------------------------------------------+" +
"|                                                              |" +
"|   +-------------------------------+          +-------+       |" +
"|   |                               |          |       |       |" +
"|   |                               |          |       |       |" +
"|   |     +----------------+        |          |       |       |" +
"|   |     |                |        |          +-------+       |" +
"|   |     |                |        |                          |" +
"|   |     |                |        |          +-------+       |" +
"|   |     +----------------+        |          |       |       |" +
"|   |                               |          |       |       |" +
"|   |                               |          |       |       |" +
"|   +-------------------------------+          +-------+       |" +
"|                                                              |" +
"+--------------------------------------------------------------+";

console.log(input);
var counter = 0;
for(var i =0; i< input.length; i++){
	if (input[i] === "+") {
		counter++;
		// console.log('layer'+ i + ' '+ input[i]);
	}

}

console.log('There are ' + counter/4 + ' boxes');

function box(){

}