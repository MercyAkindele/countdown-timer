const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let endDate;

const form = document.getElementById("form");
const h1El = document.querySelector("h1");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const eventName = document.getElementById("eventName").value;
  const eventDate = document.getElementById("eventDate").value;
  h1El.innerHTML = eventName;
  endDate = new Date(eventDate);
});

function countdown() {
  let theEventDate = endDate ? new Date(endDate) : new Date();
  const currentDate = new Date();
  const remainingTime = theEventDate.getTime() - currentDate.getTime();

  //Remaining time in days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
  const hours = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
  const seconds = Math.floor(remainingTime / 1000) % 60;

  //manipulating the DOM to show time that was obtained from the user
  daysEl.innerHTML = formatTheTime(days);
  hoursEl.innerHTML = formatTheTime(hours);
  minutesEl.innerHTML = formatTheTime(minutes);
  secondsEl.innerHTML = formatTheTime(seconds);
}
function formatTheTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
