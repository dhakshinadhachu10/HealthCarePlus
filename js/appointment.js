
const form = document.getElementById("appointment-form");

const doctor = document.getElementById("doctor");
const date = document.getElementById("date");
const time = document.getElementById("time");

const summaryDoctor = document.getElementById("summary-doctor");
const summaryDate = document.getElementById("summary-date");
const summaryTime = document.getElementById("summary-time");


// ========================================
// Appointment Summary
// ========================================

doctor.addEventListener("change", () => {
  if (doctor.value) {
    summaryDoctor.textContent =
      doctor.options[doctor.selectedIndex].text;
  } else {
    summaryDoctor.textContent = "Not selected";
  }
});


date.addEventListener("change", () => {
  if (date.value) {
    summaryDate.textContent = date.value;
  } else {
    summaryDate.textContent = "Not selected";
  }
});


time.addEventListener("change", () => {
  if (time.value) {
    summaryTime.textContent =
      time.options[time.selectedIndex].text;
  } else {
    summaryTime.textContent = "Not selected";
  }
});


// ========================================
// Form Submit
// ========================================

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(form);

  // Create appointment object
  const appointmentData = {
    doctor: formData.get("doctor"),
    date: formData.get("date"),
    time: formData.get("time"),
    mode: formData.get("mode"),

    patientName: formData.get("patientName"),
    age: Number(formData.get("age")),
    gender: formData.get("gender"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    reason: formData.get("reason")
  };

  console.log("Sending data:", appointmentData);


  // ========================================
  // Send data to backend
  // ========================================

  try {

    const response = await fetch(
      "http://localhost:3000/api/appointments",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(appointmentData)
      }
    );


    // Convert response to JSON
    const data = await response.json();

    console.log("Backend response:", data);


    // ========================================
    // Check backend response
    // ========================================

    if (!response.ok) {
      throw new Error(
        data.message || "Appointment booking failed"
      );
    }


    // ========================================
    // Success
    // ========================================

    alert("Appointment booked successfully! 🎉");


    // Clear form
    form.reset();


    // Reset appointment summary
    summaryDoctor.textContent = "Not selected";
    summaryDate.textContent = "Not selected";
    summaryTime.textContent = "Not selected";


  } catch (error) {

    console.error("Fetch Error:", error);

    alert(
      "Failed to book appointment. Please make sure the server is running."
    );
  }
});
