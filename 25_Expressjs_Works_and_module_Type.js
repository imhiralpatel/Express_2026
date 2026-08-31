// const express = require('express');

import express from "express";
import home, { contact } from "./pages/home.js";
import about from "./pages/about.js";

const app = express();

app.get("", (req, resp) => {
    resp.send(home())
});

app.get("/about", (req, resp) => {
    resp.send(about())
});


app.get("/contact", (req, resp) => {
    resp.send(contact())
});


app.listen(3400);