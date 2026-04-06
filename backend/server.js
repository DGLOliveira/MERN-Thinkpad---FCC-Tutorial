import extress from "express";


const app = extress();

app.get("/api/hello", (req, res) => {
    res.send("hello from the server");
});

app.listen(5000, () =>{ 
    console.log("server is running");
});