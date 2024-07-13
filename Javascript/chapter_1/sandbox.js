let isClicked = false;
const firstElement = document.querySelector('#firstElement').innerHTML;
const secondElement = document.querySelector('#secondElement').innerHTML;
const thirdElement = document.querySelector('#thirdElement').innerHTML;
const ninjas = ["chun li", "jet li", "jackie chan", "bruce lee"];

console.log(`I am inactive. The value of isClicked is: ${isClicked}`);

document.querySelector('#button').onclick = () => {
    isClicked = !isClicked;
    console.log(`I am activated. The value of isClicked is: ${isClicked}`);
    buttonClicked();
};

document.querySelector('#button2').onclick = () => {
    isClicked = !isClicked;
    console.log(`I am activated. The value of isClicked is: ${isClicked}`);
    printNinjas();
};

document.querySelector('#button3').onclick = () => {
    isClicked = !isClicked;
    document.querySelector('#thirdElement').innerHTML =
        isClicked ? getName("Maria") : thirdElement;
};

function buttonClicked() {
    document.querySelector('#firstElement').innerHTML = isClicked ? 'Inner HTML updated when clicked!' : `Reverted to - ${firstElement}`;
}

function logNinjas() {
    let loggedNinjas = '';
    ninjas.forEach(item => {
        loggedNinjas += `<div><p>${item}</p></div>`;
    });
    console.log(loggedNinjas);
    return loggedNinjas;
}

function printNinjas() {
    document.querySelector('#secondElement').innerHTML = isClicked ? logNinjas() : `Reverted to ${secondElement}`;
}

const getName = (string) => `${string} is your name`;
