import express from 'express';
import morgan from 'morgan';

const app = express();

// Externam Middleware
app.use(morgan('dev'));


// called 1st route
app.get("/", (req, resp) => {
    resp.send("<h1>Home Page</h1>");
})

// called 2nd route
app.get("/users", (req, resp) => {
    resp.send("<h1>User Page</h1>");
})

app.listen(3800);