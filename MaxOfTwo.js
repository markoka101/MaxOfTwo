const { read } = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  input2: process.stdin,
  output: process.stdout,
});

let x, y = null;

reader.question("Please enter your first number: ", function(input) {
    x = input;
    reader.question("Please enter your second number: ", function(input2) {
        y = input2;

        if (x > y) {
            console.log(x, "is greater than", y);
        } else if (x < y) {
            console.log(y, "is greater than", x);
        } else if (x == y) {
            console.log("The values are identical");
        }
        else {
            console.log("Something went wrong");
        }
        reader.close();
    });

    
});

