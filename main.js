document.addEventListener("keydown", function(event) {
    const asciiValue = event.keyCode;
    displayAsciiValue(asciiValue);
});

function displayAsciiValue(value) {
    const asciiContainer = document.getElementById("ascii-value");
    asciiContainer.innerText = `ASCII Value: ${value}`;
}
