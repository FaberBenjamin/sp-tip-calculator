const total = document.getElementById("total");
const custom = document.getElementById("custom");
const bill = document.getElementById("bill");
const activeClass = document.getElementsByClassName("active");
const people = document.getElementById("people");
const tip = document.getElementById("tip");
const customInput = document.getElementById("customInput");

let billValue = 0;
let billPercentage = 0;
let peopleNumber = 1;
let tipValue = 0;
let totalValue = 0;
let customValue = 0;

function Calc() {
  if (
    customValue ||
    0 & billPercentage ||
    (peopleNumber != undefined && 0 && NaN && Infinity)
  ) {
    tipValue = Math.floor(
      (billValue * (1 + Number(customValue) / 100) - billValue) / peopleNumber
    );
    tip.innerHTML = tipValue + " ft";
    totalValue = Math.floor(
      (billValue * (1 + Number(customValue) / 100)) / peopleNumber
    );
    total.innerHTML = totalValue + " ft";
  } else {
    if (billPercentage || (peopleNumber != undefined && 0 && NaN && Infinity)) {
      tipValue = Math.floor((billPercentage - billValue) / peopleNumber);
      tip.innerHTML = tipValue + " ft";
    }
    if (billPercentage || (peopleNumber != undefined && 0 && NaN && Infinity)) {
      totalValue = Math.floor(billPercentage / peopleNumber);
      total.innerHTML = totalValue + " ft";
    }
  }
}

bill.addEventListener("change", (event) => {
  billValue = event.target.value;
  if (event.target.value > 0 && Number) {
    bill.classList.add("valid");
  } else {
    bill.classList.remove("valid");
  }
  Calc();
});

const percentages = document
  .querySelectorAll(".percentage")
  .forEach((percentage) => {
    percentage.addEventListener("click", () => {
      customValue = 0;
      billPercentage = billValue * percentage.value;
      document.querySelectorAll(".percentage").forEach((percentage) => {
        percentage.classList.remove("active");
        percentage.classList.add("basic");
        customInput.classList.add("invisible");
        customInput.classList.remove("visible");
      });
      percentage.classList.toggle("active");
      percentage.classList.toggle("basic");
      Calc();
    });
  });

custom.onclick = () => {
  customInput.classList.toggle("visible");
  customInput.classList.toggle("invisible");
};

customInput.addEventListener("change", (event) => {
  customValue = event.target.value;
  Calc();
});

const Reset = document.getElementById("reset").addEventListener("click", () => {
  billValue = 0;
  bill.value = 0;
  billPercentage = 0;
  peopleNumber = 1;
  people.value = 1;
  tipValue = 0;
  document.querySelectorAll(".percentage").forEach((percentage) => {
    percentage.classList.remove("active");
    percentage.classList.add("basic");
  });
  tip.innerHTML = 0;
  total.innerHTML = 0;
});

people.addEventListener("change", (event) => {
  if (event.target.value < 1) {
    peopleNumber = 1;
    people.value = 1;
    people.classList.remove("valid");
  } else {
    peopleNumber = event.target.value;
    people.classList.add("valid");
  }
  Calc();
});
