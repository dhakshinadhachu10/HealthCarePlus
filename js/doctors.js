const bookButtons = document.querySelectorAll(".doctor-card button");

bookButtons.forEach((button) => {
  button.addEventListener("click", function () {

    const card = this.parentElement;

    const doctorName = card.querySelector("h3").innerText;
    const department = card.querySelector(".speciality").innerText;

    localStorage.setItem("doctor", doctorName);
    localStorage.setItem("department", department);

    window.location.href = "appointment.html";

  });
});
