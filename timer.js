let timerId = 0;
let startTime = 0;
let endTime = 0;

document.getElementById("start").addEventListener("click", startTimer);

function startTimer() {
  let hours = parseInt(document.getElementById("hr").value);
  let minutes = parseInt(document.getElementById("min").value);
  let seconds=parseInt(document.getElementById("sec").value);
  startTime = hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds*1000;
  endTime =new Date().getTime()+ startTime;
  timerId = setInterval(countdown, 1000);
}

function countdown() {
  let currentTime = new Date().getTime();
  let timeLeft = endTime-currentTime;
  let hours = Math.floor(timeLeft / (60 * 60 * 1000));
  let minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;

  
  if (timeLeft==0||timeLeft<0) {
   clearInterval(timerId);
   document.getElementById("timer").innerHTML ='00:00:00'
   
 }
}

function stop()
{

      clearInterval(timerId);
      
    
}
function reset()
{
   clearInterval(timerId);
   stop();
   document.getElementById("hr").value= 0;
   document.getElementById("min").value=0;
   document.getElementById("sec").value=0;
   document.getElementById("timer").innerHTML ='00:00:00'
}