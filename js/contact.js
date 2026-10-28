const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    if ( name === "" || phone === "" || email === "" || subject === "" || message === "") 
        {
        showNotification("Please fill all the fields.");
        return;
    }

    showNotification("Message Sent Successfully!");
    form.reset();
});