import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";

// Import existing routes
import messagingRoutes from "./routes/messagingRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import studentRouter from "./router/studentRouter.js";
import teacherRouter from "./router/teacherRouter.js";
import assignmentRouter from "./router/assignmentRouter.js";
import announcementRouter from "./router/announcementRouter.js";
import classRouter from "./router/classRouter.js";
import libraryRouter from "./router/libraryRouter.js";
import eventsRouter from "./router/eventsRouter.js";
import examRouter from "./router/examRouter.js";
import attendanceRouter from "./router/attendanceRouter.js";
import usersRouter from "./router/usersRouter.js";
import adminRegisterRouter from "./router/adminRegisterRouter.js";
import sendEmailRoutes from "./routes/sendEmailRoutes.js";
import forgotpassRoutes from "./routes/forgotpasswordroutes.js";
import feedbackRouter from "./router/feedbackRouter.js"; // Feedback feature
import teams from "./routes/teamRoutes.js";
import authRoutes from "./routes/authroutes.js"; // OTP-based password reset
import adminRoutes from "./routes/adminRoutes.js";

// ✅ Import the new Marks routes
import Router from "./routes/marksRoutes.js"; // <-- Make sure you have this file

const app = express();
config();

// CORS Configuration
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "*",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/assignments", assignmentRouter);
app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/class", classRouter);
app.use("/api/v1/library", libraryRouter);
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/exam", examRouter);
app.use("/api/v1/attendance", attendanceRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/register", adminRegisterRouter);
app.use("/api/v1/messages", messagingRoutes);
app.use("/api/v1/requests", requestRoutes);
app.use("/api/v1/team", teams);
app.use("/api/v1/send-email", sendEmailRoutes);
app.use("/api/vi/forgotpass", forgotpassRoutes);
app.use("/api/v1/feedback", feedbackRouter);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", adminRoutes);

// ✅ Add Marks Route to API
app.use("/api/v1/marks", Router); // <--- Added this line for marks feature

// Global Error Handler
app.use((err, req, res, next) => {
    res.json({ message: "Backend is connected to Frontend" });
    errorHandler(err, req, res, next);
});

// Connect to DB
dbConnection();

export default app;
