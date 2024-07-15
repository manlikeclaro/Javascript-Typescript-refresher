let isClicked = false;
const firstElement = document.querySelector('#firstElement').innerText;
const secondElement = document.querySelector('#secondElement').innerHTML;
const thirdElement = document.querySelector('#thirdElement').innerHTML;
const fourthElement = document.querySelectorAll('#fourthElement > li');

// console.log(fourthElement.innerHTML);

const changeClass = () => {
    fourthElement.forEach(item => {
        if (item.textContent.includes('Lorem')) {
            console.log(item);
            item.classList.add('active');
        } else {
            item.classList.add('text-danger');
        }
    });
}

changeClass(); // Call the function to apply the changes

const ninjas = ["chun li", "jet li", "jackie chan", "bruce lee"];

let user = {
    username: "John Smith",
    age: 25,
    details() {
        console.log(`user details logged`);
        return `${this.username} is ${this.age} yrs old`;
    }
}

document.querySelector('#button').onclick = () => {
    console.log(`I am activated. The value of isClicked is: ${isClicked}`);
    buttonClicked("HTML updated", firstElement, 'firstElement');
};

document.querySelector('#button2').onclick = () => {
    console.log(`I am activated. The value of isClicked is: ${isClicked}`);
    buttonClicked(logNinjas(), secondElement, 'secondElement');
};

document.querySelector('#button3').onclick = () => {
    console.log(`I am activated. The value of isClicked is: ${isClicked}`);
    buttonClicked(getName('Maria the angel'), thirdElement, 'thirdElement');
};

document.querySelector('#button4').onclick = () => {
    console.log(user.details());
}

buttonClicked = (firstParam, secondParam, thirdParam) => {
    isClicked = !isClicked;
    const element = document.querySelector(`#${thirdParam}`)
    element.innerHTML = isClicked ? firstParam : secondParam;
    if (thirdParam === 'firstElement') {
        isClicked ?
            element.classList.add('text-danger') : element.classList.remove('text-danger');
    }
}

logNinjas = () => {
    let loggedNinjas = secondElement;
    ninjas.forEach((item, index) => {
        loggedNinjas += `<li class="list-group-item">${index} - ${item}</li>`;
    });
    return loggedNinjas;
}

const getName = (string) => `${string} is your name`;
