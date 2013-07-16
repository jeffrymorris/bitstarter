#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "Modify this script to write out something different.\n";

var isPrime = function(num){
	return (num % 2 == 0);
};

var writeToFile = function (num){
	console.log(num);
};

for(var i=0; i< 100; i++){
	if(isPrime(i)){
		writeToFile(i);
	}
}
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
