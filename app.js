let saveSite = [];
const inputText = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("list-el");
let savedInLS = JSON.parse(localStorage.getItem("saveSite"))

inputBtn.addEventListener("click", function () {
  //   console.log("Event List test");
  saveSite.push(inputText.value);
  inputText.value = ""
  localStorage.setItem("saveSite", JSON.stringify(saveSite))
  renderSites()
  // console.log(localStorage.getItem("saveSite"))

});

 if (savedInLS) {
  saveSite = savedInLS
  renderSites()
 } else {
  alert("No Data Saved")
 }

function renderSites() {
  let listItems = " ";

  for (i = 0; i < saveSite.length; i++) {
    // console.log(saveSite[i])
    listItems += `
    <li>
      <a href= '${saveSite[i]}'> ${saveSite[i]} </a>
    </li>
    `;
                //Developer Way of writing the same code but professionally
            // let li = document.createElement("li")
            // li.textContent = saveSite[i]
            // ulEl.append(li)
  }

  ulEl.innerHTML = listItems;
}


