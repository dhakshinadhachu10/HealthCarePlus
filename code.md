# HealthCare+ JavaScript Explanation

---

# 1. doctors.js

## Select all Book Appointment buttons

```javascript
const bookButtons = document.querySelectorAll(".doctor-card button");
```

- Selects all **Book Appointment** buttons.
- `querySelectorAll()` returns all matching elements.

---

## Loop through each button

```javascript
bookButtons.forEach((button) => {
```

- Loops through every button one by one.
- `forEach()` is used to perform an action for each button.

---

## Add Click Event

```javascript
button.addEventListener("click", function () {
```

- Adds a click event.
- Runs the function when a button is clicked.

---

## Get the Parent Card

```javascript
const card = this.parentElement;
```

- `this` refers to the clicked button.
- `parentElement` gets the doctor card containing that button.

---

## Get Doctor Name

```javascript
const doctorName = card.querySelector("h3").innerText;
```

- Finds the `<h3>` element.
- Gets the doctor's name.

Example:

```html
<h3>Dr. Sanjay</h3>
```

Result

```
Dr. Sanjay
```

---

## Get Department

```javascript
const department = card.querySelector(".speciality").innerText;
```

- Gets the doctor's department.

Example

```
Cardiologist
```

---

## Store Doctor Name

```javascript
localStorage.setItem("doctor", doctorName);
```

- Stores the doctor name in browser storage.

Example

```
doctor = Dr. Sanjay
```

---

## Store Department

```javascript
localStorage.setItem("department", department);
```

- Stores the department.

Example

```
department = Cardiologist
```



## Redirect to Appointment Page

```javascript
window.location.href = "appointment.html";
```

- Opens the Appointment page.

---

# 2. appointment.js

## Select Form

```javascript
const form = document.getElementById("appointment-form");
```

- Selects the appointment form.

---

## Select Doctor Dropdown

```javascript
const doctor = document.getElementById("doctor");
```

- Selects the doctor dropdown.

---

## Select Date

```javascript
const date = document.getElementById("date");
```

- Selects the date input.

---

## Select Time

```javascript
const time = document.getElementById("time");
```

- Selects the time dropdown.

---

## Select Summary Doctor

```javascript
const summaryDoctor = document.getElementById("summary-doctor");
```

- Selects the doctor text in Appointment Summary.

---

## Select Summary Date

```javascript
const summaryDate = document.getElementById("summary-date");
```

- Selects the summary date.

---

## Select Summary Time

```javascript
const summaryTime = document.getElementById("summary-time");
```

- Selects the summary time.

---

# Read Doctor from Local Storage

## Get Stored Doctor

```javascript
const savedDoctor = localStorage.getItem("doctor");
```

- Reads the doctor name from browser storage.

Example

```
Dr. Sanjay
```

---

## Check Doctor Exists

```javascript
if (savedDoctor) {
```

- Executes only if a doctor is stored.

---

## Loop Through Dropdown

```javascript
for (let i = 0; i < doctor.options.length; i++) {
```

- Checks every doctor option.

---

## Compare Doctor Name

```javascript
if (doctor.options[i].text.includes(savedDoctor)) {
```

- Checks whether the option contains the stored doctor name.

Example

```
Dr. Sanjay — Cardiologist
```

contains

```
Dr. Sanjay
```

So it matches.

---

## Select Doctor

```javascript
doctor.selectedIndex = i;
```

- Automatically selects the doctor.

---

## Update Summary

```javascript
summaryDoctor.textContent = doctor.options[i].text;
```

- Displays the selected doctor in the Appointment Summary.

---

## Stop Loop

```javascript
break;
```

- Stops searching after finding the doctor.

---

## Remove Stored Doctor

```javascript
localStorage.removeItem("doctor");
```

- Deletes the stored doctor.

---

# Doctor Change

```javascript
doctor.addEventListener("change", function () {
```

- Runs when the doctor changes.

```javascript
summaryDoctor.textContent =
doctor.options[doctor.selectedIndex].text;
```

- Updates the summary.

---

# Date Change

```javascript
date.addEventListener("change", function () {
```

- Runs when a date is selected.

```javascript
summaryDate.textContent = date.value;
```

- Displays the selected date.

---

# Time Change

```javascript
time.addEventListener("change", function () {
```

- Runs when a time is selected.

```javascript
summaryTime.textContent =
time.options[time.selectedIndex].text;
```

- Displays the selected time.

---

# Submit Form

```javascript
form.addEventListener("submit", function (event) {
```

- Runs when the form is submitted.

---

```javascript
event.preventDefault();
```

- Stops page refresh.

---

```javascript
alert("Appointment Booked Successfully!");
```

- Shows a success message.

---

```javascript
form.reset();
```

- Clears the form.

---

```javascript
summaryDoctor.textContent = "Not selected";
summaryDate.textContent = "Not selected";
summaryTime.textContent = "Not selected";
```

- Resets the Appointment Summary.

---

# 3. contact.js

## Select Form

```javascript
const form = document.getElementById("contact-form");
```

- Selects the contact form.

---

## Submit Event

```javascript
form.addEventListener("submit", function (event) {
```

- Runs when the form is submitted.

---

```javascript
event.preventDefault();
```

- Stops page refresh.

---

## Get Name

```javascript
const name = document.getElementById("name").value.trim();
```

- Gets the entered name.
- `trim()` removes extra spaces.

The same is done for:

- Phone
- Email
- Subject
- Message

---

## Check Empty Fields

```javascript
if(name === "" || phone === "" || email === "" || subject === "" || message === "")
```

- Checks whether any field is empty.

---

```javascript
showNotification("Please fill all the fields.");
```

- Shows an error notification.

---

```javascript
return;
```

- Stops further execution.

---

```javascript
showNotification("Message Sent Successfully!");
```

- Shows a success notification.

---

```javascript
form.reset();
```

- Clears the form.

---

# 4. notification.js

## Create Function

```javascript
function showNotification(message)
```

- Creates a reusable notification function.

---

## Select Notification Box

```javascript
const notification = document.getElementById("notification");
```

- Gets the notification element.

---

## Display Message

```javascript
notification.innerText = message;
```

- Displays the message.

---

## Show Notification

```javascript
notification.classList.add("show");
```

- Makes the notification visible.

---

## Wait 3 Seconds

```javascript
setTimeout(function () {
```

- Waits for 3 seconds.

---

## Hide Notification

```javascript
notification.classList.remove("show");
```

- Hides the notification.

---

# 5. filter.js

## Select Category Buttons

```javascript
const categoryButtons = document.querySelectorAll(".category button");
```

- Selects all category buttons.

---

## Select Doctor Cards

```javascript
const doctorCards = document.querySelectorAll(".doctor-card");
```

- Selects all doctor cards.

---

## Add Click Event

```javascript
button.addEventListener("click", function () {
```

- Runs when a category button is clicked.

---

## Get Category

```javascript
const category = this.innerText;
```

- Gets the selected category.

Example

```
Cardiologist
```

---

## Loop Through Cards

```javascript
doctorCards.forEach((card) => {
```

- Loops through every doctor card.

---

## Get Doctor Speciality

```javascript
const speciality = card.querySelector(".speciality").innerText;
```

- Gets the doctor's speciality.

---

## Check Match

```javascript
if(category === "All" || speciality === category)
```

- If "All" is selected, show all doctors.
- Otherwise show only matching doctors.

---

## Show Card

```javascript
card.style.display = "block";
```

- Displays the doctor card.

---

## Hide Card

```javascript
card.style.display = "none";
```

- Hides the doctor card.

---

# Viva One-Line Definitions

| JavaScript | Explanation |
|------------|-------------|
| `querySelector()` | Selects the first matching element. |
| `querySelectorAll()` | Selects all matching elements. |
| `getElementById()` | Selects an element by ID. |
| `addEventListener()` | Attaches an event to an element. |
| `localStorage` | Stores data in the browser. |
| `innerText` | Gets or sets visible text. |
| `textContent` | Changes an element's text. |
| `value` | Gets the user input value. |
| `selectedIndex` | Returns the selected option index. |
| `includes()` | Checks whether a string contains another string. |
| `preventDefault()` | Stops the default browser action. |
| `setTimeout()` | Runs code after a delay. |
| `form.reset()` | Clears the form fields. |
| `window.location.href` | Navigates to another page. |
| `classList.add()` | Adds a CSS class. |
| `classList.remove()` | Removes a CSS class. |