const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// ===============================
// MongoDB Connection
// ===============================

mongoose
  .connect("mongodb://localhost:27017/healthcare")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Error:", error);
  });


// ===============================
// Mongoose Schema
// ===============================

const appointmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: String,
      required: true
    },

    date: {
      type: String,
      required: true
    },

    time: {
      type: String,
      required: true
    },

    mode: {
      type: String,
      required: true
    },

    patientName: {
      type: String,
      required: true
    },

    age: {
      type: Number,
      required: true
    },

    gender: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    reason: {
      type: String
    }
  },
  {
    timestamps: true
  }
);


// ===============================
// Model
// ===============================

const Appointment = mongoose.model(
  "Appointment",
  appointmentSchema
);


// ===============================
// Test API
// ===============================

app.get("/", (req, res) => {
  res.send("HealthCare+ Server Running");
});


// ===============================
// CREATE APPOINTMENT
// ===============================

app.post("/api/appointments", async (req, res) => {

  try {

    console.log(req.body);

    const appointment = new Appointment(req.body);

    const result = await appointment.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      data: result
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Appointment booking failed",
      error: error.message
    });

  }

});


// ===============================
// GET ALL APPOINTMENTS
// ===============================

app.get("/api/appointments", async (req, res) => {

  try {

    const appointments = await Appointment.find();

    res.status(200).json(appointments);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch appointments",
      error: error.message
    });

  }

});


// ===============================
// Server
// ===============================

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});