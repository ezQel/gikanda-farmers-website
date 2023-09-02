const activeFarmers = document.querySelector("#active-farmers");
const years = document.querySelector("#num-years");

let farmersCount = 0;
let yearsCount = 0;
const totalFarmers = 400;
const totalYears = 23;

const interval = setInterval(() => {
  farmersCount += 2;
  yearsCount++;

  activeFarmers.textContent = `${farmersCount}+`;

  if (yearsCount <= totalYears) {
    years.textContent = `${yearsCount}+`;
  }

  if (farmersCount === totalFarmers) {
    clearInterval(interval);
  }
}, 1);
