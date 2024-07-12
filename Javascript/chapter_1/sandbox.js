let isClicked = false;
console.log(`I am inactive. the value of isClicked is: ${isClicked}`);

document.querySelector('#button').onclick = function () {
    // alert("Button is clicked");
    isClicked = !isClicked;
    console.log(`I am activated. the value of isClicked is: ${isClicked}`);
    buttonClicked();
}

const initialHtml = document.querySelector('.lead').innerHTML;

function buttonClicked(event) {
    document.querySelector('.lead').innerHTML =
        isClicked ? 'Inner HTML updated when clicked!' : `Reverted to - ${initialHtml}`;
}
