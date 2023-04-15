const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let endDate;

function countdown(){
  let form = document.getElementById("form");
  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let h1El = document.querySelector("h1")
    let eventName = document.getElementById("eventName").value
    let eventDate = document.getElementById("eventDate").value
    h1El.innerHTML = eventName
    endDate = eventDate;
  })
  const brunchDate = new Date(endDate);
  const currentDate = new Date();
  const remainingDate = brunchDate-currentDate

  const mSeconds = (remainingDate)/1000;

  const days = Math.floor(mSeconds/3600/24)
  const hours = Math.floor(mSeconds/3600)% 24
  const minutes = new Date(remainingDate).getMinutes();
  const seconds = new Date(remainingDate).getSeconds();



  daysEl.innerHTML = formatTheTime(days);
  hoursEl.innerHTML = formatTheTime(hours);
  minutesEl.innerHTML = formatTheTime(minutes);
  secondsEl.innerHTML = formatTheTime(seconds);


}
function formatTheTime(time){
  return time < 10 ? `0${time}`: time;
}

countdown()
setInterval(countdown, 1000);