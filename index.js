// const express = require('express');
import express from "express";

const app = express();

app.get("", (req, resp) => {
    resp.send("<h1>Basic node js example </h1>")
});

app.get("/about", (req, resp) => {
    resp.send("<h1> This is About Page </h1>")
});

app.listen(3200);