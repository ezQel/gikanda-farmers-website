const activeFarmers = document.querySelector("#active-farmers");
const years = document.querySelector("#num-years");

if (activeFarmers && years) {
  let farmersCount = 0;
  let yearsCount = 0;
  const totalFarmers = 4000;
  const totalYears = 23;

  const interval = setInterval(() => {
    farmersCount += 20;
    yearsCount++;

    activeFarmers.textContent = `${farmersCount}+`;

    if (yearsCount <= totalYears) {
      years.textContent = `${yearsCount}+`;
    }

    if (farmersCount === totalFarmers) {
      clearInterval(interval);
    }
  }, 1);
}

const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".toggle");
let backdrop;

menuToggle.addEventListener("click", (e) => {
  document.body.classList.add("backdrop");
  backdrop = document.querySelector(".backdrop");
  menu.style.display = "flex";

  const removeBackdrop = (ev) => {
    if (!ev) {
      return;
    }

    if (ev.target.className === "menu") {
      return;
    }

    document.body.classList.remove("backdrop");
    menu.style.display = "none"; // Hide menu
    backdrop.removeEventListener("click", removeBackdrop);
  };

  backdrop.addEventListener("click", removeBackdrop);
  e.stopPropagation(); // IMPORTANT to avoid menu beng hidden immediately
});
