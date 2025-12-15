import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const adminSignin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    const admin = await User.findOne({ email });

    console.log("ADMIN FOUND:", admin);

    if (!admin) {
      return res.status(401).json({ success: false, message: "Admin not found" });
    }

    if (admin.role !== "admin") {
      return res.status(401).json({ success: false, message: "Not an admin" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    res.json({
      success: true,
      admin: {
        id: admin._id,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
