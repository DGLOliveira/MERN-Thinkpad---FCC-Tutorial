import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notes.routes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log("server is running at PORT", PORT);
    });
});
