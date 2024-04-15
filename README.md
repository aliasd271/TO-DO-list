# TO-DO-list & search

Here's the syntax of the for loop:

javascript
Copy code
for (initialization; condition; increment/decrement) {
    // code block to be executed
}
initialization: Typically initializes a counter variable or variables.
condition: Specifies the condition for continuing the loop. If the condition evaluates to true, the loop continues; if false, the loop terminates.
increment/decrement: Updates the counter variable at the end of each iteration.
Example 1: Basic for Loop
javascript

for (var i = 0; i < 5; i++) {
    console.log("Iteration " + (i + 1));
}
This loop will log "Iteration 1" to "Iteration 5" to the console.

Example 2: Looping Over an Array
javascript

var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log("Number: " + numbers[i]);
}
This loop iterates over each element of the numbers array and logs its value to the console.

Example 3: Nested for Loop
javascript


for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("i: " + i + ", j: " + j);
    }
}
This loop demonstrates nesting, where each iteration of the outer loop triggers several iterations of the inner loop.

Example 4: Looping Backwards
javascript
Copy code
for (var i = 5; i >= 0; i--) {
    console.log(i);
}
This loop counts backwards from 5 to 0.

Example 5: Skipping Iterations
javascript
Copy code
for (var i = 0; i < 6; i++) {
    if (i === 3) {
        continue; // Skip iteration if i equals 3
    }
    console.log(i);
}
This loop skips the iteration when i is equal to 3 using the continue statement.

Example 6: Exiting the Loop Early
javascript
Copy code
for (var i = 0; i < 6; i++) {
    if (i === 3) {
        break; // Exit the loop when i equals 3
    }
    console.log(i);
}
This loop exits early when i equals 3 using the break statement.

for loops are versatile and powerful constructs for iterating over collections, generating sequences, or executing a block of code a specified number of times. Practice using them with different scenarios to become comfortable with their usage. Let me know if you have any questions or need further explanations!




