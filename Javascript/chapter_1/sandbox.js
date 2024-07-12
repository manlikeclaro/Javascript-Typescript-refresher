let isClicked = false;
const firstElement = document.querySelector('#firstElement').innerHTML;
const secondElement = document.querySelector('#secondElement').innerHTML;
const thirdElement = document.querySelector('#thirdElement').innerHTML;
const ninjas = ["chun li", "jet li", "jackie chan", "bruce lee"];

console.log(`I am inactive. the value of isClicked is: ${isClicked}`);

document.querySelector('#button').onclick = function () {
    isClicked = !isClicked;
    console.log(`I am activated. the value of isClicked is: ${isClicked}`);
    buttonClicked();
}

document.querySelector('#button2').onclick = function () {
    isClicked = !isClicked;
    console.log(`I am activated. the value of isClicked is: ${isClicked}`);
    printNinjas();
}

document.querySelector('#button3').onclick = function () {
    document.querySelector('#thirdElement').innerHTML = getName("Maria");
}

function buttonClicked(event) {
    document.querySelector('#firstElement').innerHTML =
        isClicked ? 'Inner HTML updated when clicked!' : `Reverted to - ${firstElement}`;
}

function logNinjas() {
    let loggedNinjas = '';
    for (let ninja of ninjas) {
        loggedNinjas += `<div><p>${ninja}</p></div>`;
    }
    // console.log(loggedNinjas);
    return loggedNinjas;
}

function printNinjas() {
    // logNinjas();
    document.querySelector('#secondElement').innerHTML =
        isClicked ? logNinjas() : `Reverted to ${secondElement}`;
}

const getName = (string) => {
    return `${string} is your name`;
}