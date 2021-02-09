
'use strict';

let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let startTime;
let elapsedTime = 0;
let timerId;
let timeToadd = 0;

function updateTimeText() {
  let m = Math.floor(elapsedTime / 60000);
  let s = Math.floor(elapsedTime % 60000 / 1000);
  let ms = Math.floor(elapsedTime % 1000);
  m = String(m).padStart(2,'0');
  s = String(s).padStart(2,'0');
  ms = String(ms).padStart(3,'0');
  timer.textContent = m + ":" + s + "." + ms;
}
function countUp() {
  timerId = setTimeout(function() {
    elapsedTime = Date.now() - startTime + timeToadd;
    updateTimeText();
    countUp();
  },10)
}
start.addEventListener('click',function() {
  startTime = Date.now();
  const limit = document.getElementById('start');
  limit.classList.add('limit');
  countUp();
});
stop.addEventListener('click',function() {
  clearTimeout(timerId);
  timeToadd += Date.now() - startTime;
});
reset.addEventListener('click',function() {
  elapsedTime = 0;
  timeToadd = 0;
  updateTimeText();
});
