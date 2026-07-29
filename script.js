let running = false;

let startTime = 0;

let elapsed = 0;

let timerInterval;

const startStopButton = document.getElementById("startStop");

const resetButton = document.getElementById("reset");

const timerDisplay = document.getElementById("timer");

function updateTimer() {

  let time = Date.now() - startTime + elapsed;

  let milliseconds = time % 1000;

  let seconds = Math.floor(time / 1000) % 60;

  let minutes = Math.floor(time / 60000) % 60;

  let hours = Math.floor(time / 3600000);

  timerDisplay.textContent =

    String(hours).padStart(2,"0") + ":" +

    String(minutes).padStart(2,"0") + ":" +

    String(seconds).padStart(2,"0") + "." +

    String(milliseconds).padStart(3,"0");

}

startStopButton.onclick = function () {

  if (!running) {

    startTime = Date.now();

    timerInterval = setInterval(updateTimer, 10);

    running = true;

    startStopButton.textContent = "Stop";

  } else {

    clearInterval(timerInterval);

    elapsed += Date.now() - startTime;

    running = false;

    startStopButton.textContent = "Start";

  }

};

resetButton.onclick = function () {

  clearInterval(timerInterval);

  running = false;

  elapsed = 0;

  startStopButton.textContent = "Start";

  timerDisplay.textContent = "00:00:00.000";

};

// Password Generator

const passwordText = document.getElementById("password");

document.getElementById("generatePassword").onclick = function () {

  let characters =

  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  let password = "";

  for(let i = 0; i < 16; i++){

    password += characters[Math.floor(Math.random()*characters.length)];

  }

  passwordText.textContent = password;

};

document.getElementById("copyPassword").onclick = function(){

  navigator.clipboard.writeText(passwordText.textContent);

  alert("Password copied ✅");

};

// AI Essay Generator

document.getElementById("generateEssay").onclick = async function(){

  let topic = document.getElementById("essayTopic").value;

  let words = document.getElementById("essayWords").value;

  let output = document.getElementById("essayOutput");

  output.value = "Generating AI essay... 🤖";

  try {

    let response = await fetch("https://talal481-github-io-4.onrender.com/essay", {

      method:"POST",

      headers:{

        "Content-Type":"application/json"

      },

      body: JSON.stringify({

        topic: topic,

        words: words

      })

    });

    let data = await response.json();

    output.value = data.result;

  } catch(error){

    output.value = "Error connecting to AI ❌";

  }

};

// AI Humanizer

document.getElementById("humanize").onclick = async function(){

  let text = document.getElementById("humanInput").value;

  let output = document.getElementById("humanOutput");

  output.value = "Humanizing... ✨";

  try {

    let response = await fetch("https://talal481-github-io-4.onrender.com/humanize", {

      method:"POST",

      headers:{

        "Content-Type":"application/json"

      },

      body: JSON.stringify({

        text:text

      })

    });

    let data = await response.json();

    output.value = data.result;

  } catch(error){

    output.value = "Error connecting to AI ❌";

  }

};

// Copy buttons

document.getElementById("copyEssay").onclick = function(){

  navigator.clipboard.writeText(

    document.getElementById("essayOutput").value

  );

  alert("Essay copied ✅");

};

document.getElementById("copyHuman").onclick = function(){

  navigator.clipboard.writeText(

    document.getElementById("humanOutput").value

  );

  alert("Text copied ✅");

};

// Theme

document.getElementById("changeBackground").onclick = function(){

  let color = document.getElementById("backgroundColor").value;

  document.body.style.background = color;

};
