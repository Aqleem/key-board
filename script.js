// write your JS code here

let keys = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

function init() {
    let bodyEi = document.querySelector("#keyboard");
    for (let i = 0; i < keys.length; i++) {
        bodyEi.innerHTML += `
		<span class="one">  
		<div class="button" onclick="displayValue('${keys[i]}')">${keys[i]}</div>
		</span>
		`
    }
}
let sent = '';

function displayValue(x) {
    sent += x;
    document.querySelector(".message").innerHTML = sent;
};

function massageSent() {
    document.querySelector('.message').innerHTML = " ";
    alert("Your message has been sent!!!");
    sent = "";
}