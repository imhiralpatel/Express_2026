import express from 'express';

const app = express();

// called 1st route
app.get("/", (req, resp) => {
    resp.send("<h1>Home Page</h1>");
})

app.get("/users", (req, resp) => {
    resp.send1("<h1>User Page</h1>");
})

app.get("/error", (req, resp, next) => {
    resp.send("<h1>Error Page</h1>");
    const error = new Error('');
    error.status = 404;
    next();
})

function errorHandling(error, req, resp, next){
    resp.status(error.status || 500).send("Try after some time...")
}

app.use(errorHandling);

app.listen(3800);