let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

const SET_FUTURE_DATE = "1 Jun 2022";

function countdown() {
  const FUTURE_DATE = new Date(SET_FUTURE_DATE);
  const CURRENT_DATE = new Date();
  let totalSeconds = (FUTURE_DATE - CURRENT_DATE) / 1000; 
  let days = Math.floor(totalSeconds / 3600 / 24);                              
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let minutes = Math.floor(totalSeconds / 60) % 60;
  let seconds = Math.floor(totalSeconds) % 60;
  daysElement.innerHTML = days
  hoursElement.innerHTML = hours
  minutesElement.innerHTML = minutes
  secondsElement.innerHTML = seconds

}
setInterval(countdown,1000)
countdown()
