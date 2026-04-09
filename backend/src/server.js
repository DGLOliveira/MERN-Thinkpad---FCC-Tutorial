import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notes.routes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

//middlewares
if (!process.env.NODE_ENV === "production") {
    app.use(cors({
        origin: "http://localhost:5173"
    }));
}
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
    //Starts frontend
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    //Redirects any path other than the previous to the frontend
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    })
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is running at PORT", PORT);
    });
});
