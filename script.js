const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navUl.classList.toggle("active");
});

document.querySelectorAll("nav li a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navUl.classList.remove("active");
  })
);
