const menuContent = document.getElementById("menu_content");
const menuBarIcon = document.getElementById("menu_icon_bar");
const closeBar = document.getElementById("close");

menuBarIcon.addEventListener("click", () => {
  var show = document.getElementById("condition");
  if (show.classList.contains("hidden") === true) {
    show.classList.remove("hidden");
  }
});

closeBar.addEventListener("click", () => {
  var show = document.getElementById("condition");
  show.classList.add("hidden");
});
