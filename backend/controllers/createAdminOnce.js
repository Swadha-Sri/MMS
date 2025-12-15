import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const createAdminOnce = async () => {
  try {
    // check if admin already exists
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    // hash password
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // create admin
    await User.create({
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin created → admin@gmail.com / admin123");
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
  }
};
