/*
FIXME:

*/

/*
1. Create a function expression by assigning an anonmyous function
to a variable called myFunctionExpression.
The function should console log your name.
*/

const myFunctionExpression = function () {
    console.log("Rokas");
};

myFunctionExpression();

/*
2. Select the button in the HTML below by its class.
Add a click event listener.
The callback function passed to the event listener should log the sentence
"I was clicked".
*/

const button = document.querySelector(".btn");

const callAfterClick = function() {
    console.log("I was clicked")
};

button.addEventListener("click", callAfterClick);

/*
3. Select the input in the HTML below by its id.
Add a keydown event listener.
The callback function passed to the event listener should log the value
of the key that was pressed.
*/

const idSelector = document.querySelector("#firstName");

document.addEventListener("keydown", function callAfterAKeyIsPressed() {
    var x = event.keyCode; // Get the Unicode value
    var y = String.fromCharCode(x); // Convert the value into a character
    
    document.querySelector("#firstName").innerHTML = "Character: " + y;
});

/*
4. Select the button in the HTML below by its tag.
Add a mouseover event listener.
The callback function should add a class called hover to the button.
*/

const button = document.querySelector("button");

function addClass() {
    button.classList.add("hover");
}

button.addEventListener("mouseover", addClass);

/*
5. Select the button in the HTML below by its data attribute
and add a mouseout event listener to it.
The callback function should remove the class called hover from the button.
*/


const button = document.querySelector("[data-animal='dog']");

function removeClass() {
    button.classList.remove("hover");
}

button.addEventListener("mouseout", removeClass);

/*
6. Select all the li tags from the HTML below.
Using a loop, add a mouseover event listener to each tag.
The callback function should log the value of the data attribute
on each element when the cursor moves over it.
*/

const list = document.querySelectorAll("li");

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover");
} 

function dataAttributeLog() {
    console.log(li.dataset.animal);
}

/*
7. Convert the if-else-if statement below to a switch statement.
Use the code inside the else block in the default block in the switch.
*/

const animal = "cow";

switch(animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}

/*
8. Convert the for loop code to a forEach loop.
*/

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
});

/*
9. Create a timer that logs the word hello every half a second.
It must stop after its logged the word 6 times.
*/

function hello() {
    console.log("Hello");

    if (helloCounter === 5) {
        clearInterval(intervalId);
    }

    helloCounter ++;
}

let helloCounter = 0;

const intervalId = setInterval(hello, 5);

/*
10. Select the div from the HTML below.
Write code that updates the div's text to say Text updated after waiting 2 seconds.
You can use either innerText or innerHTML to update the text.
*/

const divContainer = document.querySelector(".container");

function updateDiv() {
    divContainer.innerHTML = "Text updated"
}

setTimeout(updateDiv, 2000);