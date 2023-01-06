// Get the button and value elements
var button = document.getElementById("button");
var value = document.getElementById("value");
var loading = document.querySelector(".loading");
var result = document.querySelector('#value')

// Add an event listener to the button
const generate = function() {

    value.classList.add('display-none')
    loading.classList.remove("display-none");

    setTimeout(function() {
        loading.classList.add("display-none");
        value.classList.remove("display-none");
    }, 3000)

    // Generate a random number between 0 and 1
    var randomNumber = Math.random();

    // Use an if statement to determine which range to use
    if (randomNumber < 0.8) {
        // Generate a random value between 1.05 and 1.20
        var randomValue = (Math.random() * (1.20 - 1.05) + 1.05).toFixed(2);
    } else {
        // Generate a random value between 1.20 and 1.80
        var randomValue = ((Math.random() * (1.80 - 1.20) + 1.20).toFixed(2));
    }

    // Update the value element with the new value
    value.textContent = randomValue  + 'x';
};