const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("text-black"));
    item.classList.add("text-black");
  });
});
