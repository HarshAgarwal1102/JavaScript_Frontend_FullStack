function mainFunction(callback) {
console.log("Performing operation...");
// Use setTimeout to simulate an asynchronous operation
setTimeout(function() {
	callback("Operation complete");
}, 1000);
}

// Define the callback function
function callbackFunction(result) {
console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);




function divideByHalf(sum){
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum){
  console.log(sum * 2);
}

function operationOnSum(num1,num2,operation){
  var sum = num1 + num2;
  operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3
operationOnSum(5, 5, multiplyBy2); // Outputs 20
