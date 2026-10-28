const categoryButtons = document.querySelectorAll(".category button");
const doctorCards = document.querySelectorAll(".doctor-card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.innerText;

    doctorCards.forEach((card) => {
      const speciality = card.querySelector(".speciality").innerText;

      if (category === "All" || speciality === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
