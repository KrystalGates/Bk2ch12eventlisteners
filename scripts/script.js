// Practice: Mirror, Mirror in the Code

// Create an input field in your DOM. Give it an id of 
//     message.
// Create two article elements with unique id values. 
// Use Flexbox to display them in a row, each taking 
//     50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup 
//     event on the input field.
// The event handler function should update the 
//     textContent property of both sections.

// let output1 = document.getElementById("entry1")
// let output2 = document.getElementById("entry2")
// let input = document.getElementById("message")

// input.addEventListener("keyup", function(event){
//     output1.textContent = event.target.value 
//     output2.textContent = event.target.value
// })

// Practice: Scrolling and Scaling
// const audrey = document.querySelector("#audrey")
// /*
//     Add an event listener to the `document` object to listen
//     for the "scroll" event.
// */
// window.addEventListener("scroll", function (event) {
//     /*
//         Adjust the width of audrey to be 1/3 the value of
//         `window.scrollY`. No lower than 50px, though.
//     */
//    audrey.style.width = window.scrollY/3 + "px";
//    audrey.style.minWidth = 50 + "px";

//     /*
//         Adjust the height of audrey to be 1/4 the value of
//         `window.scrollY`. No lower than 100px, though.
//     */
//    audrey.style.height = window.scrollY/4 + "px";
//    audrey.style.minHeight = 100 + "px";
// })


// /* Practice: Wonder Powers Activate! */
// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the 
//     disabled class on the corresponding 
//     <section id="flight"> (section, not button) 
//     and replace it with a class of enabled.
// Have your developer tools open. When you click the button, 
// the following element


// document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

// function flightHandlerFunction (event) {
//     let flight = document.querySelector("#flight")
//     flight.classList.toggle("enabled")
//     // flight.classList.toggle("disabled")
//     };

// document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

// // Once you have that working, write two more JavaScript functions,    
// // and two more querySelector().addEventListener() statements for 
// // handling the click event on the other two buttons. Those event handlers 
// // should perform the same step of removing disabled, and adding enabled 
// // on the corresponding <section> elements

// function mindreadingHandlerFunction (event){
//     let mindreading = document.querySelector("#mindreading")
//     mindreading.classList.toggle("enabled")
//     mindreading.classList.toggle("disabled")
// };
// document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction)

// function xrayHandlerFunction (event) {
//     let xray = document.querySelector("#xray")
//     xray.classList.toggle("enabled")
//     xray.classList.toggle("disabled")
// }
// document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

// // Write two more event handlers for activating and deactivating 
// // all powers when the corresponding buttons are clicked. You will 
// // need to use the document.querySelectorAll() method for these.

// function activeAllHandlerFunction (event) {
//     let powerOn = document.querySelectorAll(".power")
//     for(i = 0; i < powerOn.length; i++){
//         console.log(powerOn)
//         powerOn[i].classList.toggle("enabled")
//         powerOn[i].classList.toggle("disabled")
//         }
// }

// document.querySelector("#activate-all").addEventListener("click", activeAllHandlerFunction)

// function deactiveAllHandlerFunction (event) {
//     let powerOn = document.querySelectorAll(".power")
//     for(i = 0; i < powerOn.length; i++){
//         console.log(powerOn)
//         powerOn[i].classList.toggle("disabled")
//         power[i].classList.toggle("enabled")
//         }
// }

// document.querySelector("#deactivate-all").addEventListener("click", deactiveAllHandlerFunction)