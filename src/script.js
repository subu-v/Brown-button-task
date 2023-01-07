const accordion = document.querySelectorAll(".accordion__content");

accordion.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("clicked")
    item.classList.toggle("accordion__content--active");
  });
});
