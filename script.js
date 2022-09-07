const toggle = document.getElementById("toggle"),
  h1 = document.querySelector("h1"),
  h2 = document.querySelector("h2"),
  h3 = document.querySelector("h3");

setTimeout(() => {
  h1.innerHTML = "Press to generate random activity";
  h3.innerHTML = "Click Here";
  const btn = document.querySelector(".rectangle");
  btn.addEventListener("click", function () {});
}, 1500);

toggle.addEventListener("click", function () {
  document.body.classList.toggle("light");
  h1.classList.toggle("text-light");
  h2.classList.toggle("text-light");
  h3.classList.toggle("text-light");
});

function getData() {
  return fetch("https://www.boredapi.com/api/activity/")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response;
    });
}

console.log(getData());
