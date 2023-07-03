function toggleNav() {
  const nav = document.getElementById("nav-bar");
  if (nav.style.display === "none") {
    nav.style.display = "grid";
  } else {
    nav.style.display = "none";
  }
}
