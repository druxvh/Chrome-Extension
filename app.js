const saveSite = ["zzz", "xxx", "sss"];
const inputText = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("list-el");

inputBtn.addEventListener("click", function () {
  //   console.log("Event List test");
  saveSite.push(inputText.value);
  renderSites()
  //   console.log(saveSite)
});

function renderSites() {
  let listItems = " ";

  for (i = 0; i < saveSite.length; i++) {
    // console.log(saveSite[i])
    listItems += "<li>" + saveSite[i] + "</li>";
                //Developer Way of writing the same code but professionally
            // let li = document.createElement("li")
            // li.textContent = saveSite[i]
            // ulEl.append(li)
  }

  ulEl.innerHTML = listItems;
}
