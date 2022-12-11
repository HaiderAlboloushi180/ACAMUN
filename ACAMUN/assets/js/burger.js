const burgerOpen = () => {
  let menu = document.getElementById("menubar");

  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};
