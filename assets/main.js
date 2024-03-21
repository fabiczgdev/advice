const adviceText = document.querySelector("#advice");
const adviceID = document.querySelector("#id");
const btn = document.querySelector("#obtener");

btn.addEventListener("click", () => {
  adviceGenerator();
});

window.onload = () => {
  adviceGenerator();
};

function adviceGenerator() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const AdviceInfo = adviceData.slip;
      adviceID.innerHTML = `ADVICE #${AdviceInfo.id}`;
      adviceText.innerHTML = `"${AdviceInfo.advice}"`;
    });
}
