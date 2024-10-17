const add = document.getElementById('add');
const rem = document.getElementById('rem');
const res = document.getElementById('res');
let number = 0;
const CounterName = document.getElementById('CounterName');
const enterName = document.getElementById('enterName');
const startMenu = document.getElementById('startMenu');
const counter = document.getElementById('counter')

enterName.addEventListener('click', editName);
console.log(CounterName)
console.log(enterName)
console.log(startMenu)
console.log(counter)

function editName(event) {
    console.log(event)
    startMenu.style.display = "none";
    counter.style.display = "unset";
    document.getElementById('name').innerHTML = CounterName.value;
}

add.addEventListener('click', addNum);
rem.addEventListener('click', remNum);
res.addEventListener('click', resNum);

function addNum() {
    const multiplier = document.getElementById('multi');
    number = number + parseInt(multiplier.value);
    document.getElementById('number').innerHTML = number;
}

function remNum() {
    const multiplier = document.getElementById('multi');
    number = number - parseInt(multiplier.value);
    document.getElementById('number').innerHTML = number;
}

function resNum() {
    document.getElementById('number').innerHTML = 0;
}

const password = window.prompt("Enter a password!");
if (password == "MonkeeeCode"){
    console.log("Password accepted!");
} else {
    console.log("Passwrod denied!");
    window.location.replace("https://google.com")
}