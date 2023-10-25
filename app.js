let saveSite = [];
const inputText = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const saveTab = document.getElementById("tab-btn")
const clearFunc = document.getElementById("clear-btn")

const ulEl = document.getElementById("list-el");
const savedInLS = JSON.parse(localStorage.getItem("saveSite"));

inputBtn.addEventListener("click", function () {
  //   console.log("Event List test");
  saveSite.push(inputText.value);
  inputText.value = "";
  localStorage.setItem("saveSite", JSON.stringify(saveSite));
  render(saveSite);
  // console.log(localStorage.getItem("saveSite"))
  console.log("Save  it test")
});

saveTab.addEventListener("click", function() {
  console.log("Save Tab Test")
})
clearFunc.addEventListener("click", function() {
  console.log("Clear Tab Test")
})



if (savedInLS) {
  //if (truthy)
  saveSite = savedInLS;
  render(saveSite);
} else {
  alert("No Data Saved");
}

function render(saveSite) {
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
