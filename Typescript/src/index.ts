// Define variables
const age: number = 256;
let namesArray = [];
let numbersArray: number[] = [123, 345, 678];

namesArray.push('John', 34, true);
console.log(namesArray);

// Function to print age with a message
const printAge = (ageParam: number): void => {
    console.log(`${ageParam} years old.`);
};

// Function to push a number to the numbersArray
function pushNumber(numbParam: number = 256): void {
    console.log(`Initial array: ${numbersArray}`);
    let counter: number = 0;

    // Check if numbersArray length is less than 10
    if (numbersArray.length < 10) {
        while (numbersArray.length < 10) {
            numbersArray.push(numbParam);
            counter += 1; // Increment counter for each push
        }
        // Output the transformed array and counter value
        console.log(`Transformed array: ${numbersArray}. Counter: ${counter}`);
    } else {
        // If numbersArray length is 10 or more, pop the last element
        let popped: number | undefined = numbersArray.pop();
        console.log(`Twice transformed array: ${numbersArray}. Popped ${popped}`);
    }
}

// Call the printAge function with age constant
printAge(age);

// Call pushNumber function without parameter (default to 256)
pushNumber();

// Call pushNumber function with parameter 567
pushNumber(567);
