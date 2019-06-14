// Challenge: One Function to Rule Them All
// You may notice that your code to enable individual 
// powers (not all at once) is very similar. To keep your 
// code DRY, make one function that will handle activating a 
// power depending on which button is clicked.
//  (Hint: one way to get started is to use event.target.id.split("-") 
//  in your function)




function xrayHandlerFunction (event) {
    let xray = document.querySelector("#xray")
    xray.classList.toggle("enabled")
    xray.classList.toggle("disabled")
}
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

document.querySelectorAll