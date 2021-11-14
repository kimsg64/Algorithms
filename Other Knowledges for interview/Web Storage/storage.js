const cookie = document.getElementById("cookie");
const session = document.getElementById("session");
const local = document.getElementById("local");
const show = document.getElementById("show");

function handleCookie() {
  const tomorrow = new Date(Date.now() + 86400e3);
  document.cookie = document.cookie.includes("🍪")
    ? "🍪=; max-age=0;"
    : `🍪=This is new cookie!; expires=${tomorrow.toUTCString()}; path=/;`;
  show.innerHTML = document.cookie;
}
function handleSession() {
  sessionStorage.getItem("session data") !== null
    ? sessionStorage.removeItem("session data")
    : sessionStorage.setItem(
        "session data",
        JSON.stringify(["This", "is", "new", "session", "items"])
      );
  show.innerHTML = JSON.parse(sessionStorage.getItem("session data"));
}
function handleLocal() {
  localStorage.getItem("local data") !== null
    ? localStorage.removeItem("local data")
    : localStorage.setItem(
        "local data",
        JSON.stringify(["This", "is", "new", "local", "items"])
      );
  show.innerHTML = JSON.parse(localStorage.getItem("local data"));
}

cookie.addEventListener("click", handleCookie);
session.addEventListener("click", handleSession);
local.addEventListener("click", handleLocal);
