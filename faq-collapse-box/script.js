const toggleBtns = document.querySelectorAll(".faq-toggle");

toggleBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("active");
  });
});
