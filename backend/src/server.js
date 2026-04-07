import express from "express";
import notesRoutes from "./routes/notes.routes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

//middleware
app.use(express.json());

app.use("/api/notes", notesRoutes);



app.listen(process.env.PORT, () =>{ 
    console.log("server is running at PORT", process.env.PORT);
});