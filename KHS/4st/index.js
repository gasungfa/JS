const clockTitle = document.querySelector("h2");
const christmas = new Date("2023-12-25");

function getClock() {
  const date = new Date();
  const dDay = christmas - date;
  const dDay_Day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const dDay_Hours = Math.floor((dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const dDay_Minutes = Math.floor((dDay % (1000 * 60 * 60)) / (1000 * 60));
  const dDay_Seconds = Math.floor((dDay % (1000 * 60)) / 1000);
  clockTitle.innerText = `${dDay_Day}d ${dDay_Hours}h ${dDay_Minutes}m ${dDay_Seconds}s`;
}

getClock();
setInterval(getClock, 1000);
