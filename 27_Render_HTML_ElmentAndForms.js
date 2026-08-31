import express from "express";
import login from "./pages/login.js";
import home from "./pages/home.js";

const app = express();

app.get("", (req, resp) => {
    resp.send(home());
});

app.get("/login", (req, resp) => {
    resp.send(login());
});


app.post("/submit", (req, resp) => {
    resp.send("<h1> Data Submitted... </h1>");
});

app.listen(3600);