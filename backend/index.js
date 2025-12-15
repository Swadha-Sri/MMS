import app from "../backend/app.js";
import dotenv from "dotenv";
import teamRoutes from "./routes/teamRoutes.js";
import { createAdminOnce } from "./controllers/createAdminOnce.js";
dotenv.config({ path: "./.env" });
app.use("/api/team", teamRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    createAdminOnce();
    console.log(`Server listening on port ${PORT}`);
});
