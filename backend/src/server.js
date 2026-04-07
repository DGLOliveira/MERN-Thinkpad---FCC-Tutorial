import extress from "express";
import notesRoutes from "./routes/notes.routes.js";

const app = extress();

app.use("/api/notes", notesRoutes);



app.listen(5000, () =>{ 
    console.log("server is running");
});