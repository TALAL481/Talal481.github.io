let seconds = 0;

let stopwatch;

const timer = document.getElementById("timer");

document.getElementById("startStop").onclick = function () {

  if (stopwatch) {

    clearInterval(stopwatch);

    stopwatch = null;

    this.textContent = "Start";

  } else {

    stopwatch = setInterval(() => {

      seconds++;

      let h = Math.floor(seconds / 3600);

      let m = Math.floor((seconds % 3600) / 60);

      let s = seconds % 60;

      timer.textContent =

        String(h).padStart(2,"0") + ":" +

        String(m).padStart(2,"0") + ":" +

        String(s).padStart(2,"0");

    },1000);

    this.textContent = "Stop";

  }

};

document.getElementById("reset").onclick = function(){

  seconds = 0;

  timer.textContent = "00:00:00";

};

// Pomodoro

document.getElementById("startPomo").onclick = function(){

let mins = Number(document.getElementById("pomoMinutes").value);

let time = mins * 60;

let display = document.getElementById("pomoDisplay");

let interval = setInterval(()=>{

let m = Math.floor(time/60);

let s = time % 60;

display.textContent = `${m}:${s}`;

time--;

if(time < 0){

clearInterval(interval);

display.textContent = "Done 🔥";

}

},1000);

};

// To do list

document.getElementById("addTask").onclick = function(){

let input = document.getElementById("taskInput");

let li = document.createElement("li");

li.textContent = input.value;

document.getElementById("taskList").appendChild(li);

input.value="";

};

// Notes

document.getElementById("saveNotes").onclick=function(){

localStorage.setItem(

"notes",

document.getElementById("notes").value

);

alert("Notes saved ✅");

};

document.getElementById("notes").value =

localStorage.getItem("notes") || "";

// Calculator

document.querySelector("#calc + button").onclick=function(){

try{

document.getElementById("calcResult").textContent =

eval(document.getElementById("calc").value);

}catch{

document.getElementById("calcResult").textContent =

"Error";

}

};

// Password Generator

document.querySelector("#password").previousElementSibling.onclick=function(){

let chars =

"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$";

let pass="";

for(let i=0;i<16;i++){

pass += chars[Math.floor(Math.random()*chars.length)];

}

document.getElementById("password").textContent = pass;

};
