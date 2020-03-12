const button = document.querySelector("#button")

button.addEventListener("click", async (e) => {
  e.preventDefault();
  const form = document.getElementById("formOne");
  const threeDigListData = new FormData(form);
  const resp = await axios.post("http://localhost:3000/three_digital_listings", threeDigListData);
  console.log(resp);
});

const buttonTwo = document.querySelector("#buttonTwo")

buttonTwo.addEventListener("click", async (e) => {
  e.preventDefault();
  const form = document.getElementById("formTwo");
  const twoDigListData = new FormData(form);
  const resp = await axios.post("http://localhost:3000/two_digital_listings", twoDigListData);
  console.log(resp);
});
