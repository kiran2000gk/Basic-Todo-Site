const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }
  createDiv(itemName) {
    let input = document.createElement("input");
    input.type = "text";
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let removebutton = document.createElement("button");
    removebutton.innerHTML = "Remove";
    removebutton.classList.add("removebutton");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(removebutton);

    removebutton.addEventListener("click", () => this.remove(itemBox));
  }

  remove(item) {
    container.removeChild(item);
  }
}

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}
addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});
