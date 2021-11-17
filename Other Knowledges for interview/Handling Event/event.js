const property = document.getElementById("property");
const inline = document.getElementById("inline");
const listener = document.getElementById("listener");
const box = document.getElementById("box");

function letUsersKnow() {
  box.innerHTML = `Event is fired by event ${this.innerText}!`;
}

function letDeveloperKnow() {
  console.log(`Event is fired by event ${this.innerText}!`);
}

property.onclick = letDeveloperKnow;
property.onclick = letUsersKnow;

listener.addEventListener("click", letUsersKnow);
listener.addEventListener("click", letDeveloperKnow);

//////////////////////////////////////////////////////////////////////////////

const exForm = document.getElementById("ex_form");
function handleForm(e) {
  e.preventDefault();
  console.log("checking validation . . .");
}
exForm.addEventListener("submit", handleForm);

//////////////////////////////////////////////////////////////////////////////
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

function clickGrandparent(e) {
  alert("grandparent");
  console.log("e.target: ", e.target);
  console.log("this: ", this);
}
function clickParent(e) {
  e.stopPropagation();
  alert("parent");
}
function clickChild(e) {
  alert("child");
}

grandparent.addEventListener("click", clickGrandparent);
parent.addEventListener("click", clickParent);
child.addEventListener("click", clickChild);
