let saveSite = []; // Pushing data into this array
const inputText = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const saveTab = document.getElementById("tab-btn");
const clearFunc = document.getElementById("clear-btn");

const ulEl = document.getElementById("list-el");
const savedInLS = JSON.parse(localStorage.getItem("saveSite")); // Pushing the saved data into the Local Storage of the user.

// The Input Text Field Save It Button
inputBtn.addEventListener("click", function () {
  saveSite.push(inputText.value);
  inputText.value = "";
  localStorage.setItem("saveSite", JSON.stringify(saveSite));
  render(saveSite);
  console.log("Save  it test");
});
// SaveTab Function
saveTab.addEventListener("click", function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    saveSite.push(tabs[0].url);
    localStorage.setItem("saveSite", JSON.stringify(saveSite));
    render(saveSite);
  });

  // console.log(tabs[0].url)
  console.log("Save Tab Test");
});
// Clear Data Function
clearFunc.addEventListener("dblclick", function () {
  localStorage.clear();
  saveSite = [];
  render(saveSite);
  console.log("Clear Tab Test");
});

if (savedInLS) {
  //if (truthy)
  saveSite = savedInLS;
  render(saveSite);
} else {
  alert("No Data Saved (TEST)");
}

//  Render Function
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
