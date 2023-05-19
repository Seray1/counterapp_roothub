let count = 0
let display = document.getElementById("display")
let saveEl = document.getElementById("save-el")

function increase() {
  count += 1
  display.textContent = count
}

function decrease() {
  count -= 1
  display.textContent = count
  if (Number(count) < 0) {
    count = 0
    display.textContent = 0
    alert("please add a number")
  }
}
function reset() {
  count = 0
  display.textContent = 0
}
function save() {
  saveEl.innerHTML += " - " + count
  count = 0
  display.textContent = 0
}
function clearPrev() {
  saveEl.innerHTML = "Previous entries:  "
  console.log("clicked")
}
