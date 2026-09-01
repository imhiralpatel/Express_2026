import express from 'express';
import path from 'path';

const app = express();

// Built-In Middleware
app.use(express.urlencoded({extended : false}));
app.use(express.static('public'));


app.get("/", (req, resp) => {
    const filePath = path.resolve('view/home.html');
    resp.sendFile(filePath);
})

app.get("/login", (req, resp) => {
    resp.send(
        `
        <form action="/submit" method="post">
        <br>
        <input type="text" placeholder="Enter email" name="email" />
        <br>
        <br>
        <input type="password" placeholder="Enter password" name='password' />
        <br>
        <br>
        <button>Submit</button>
        </form>
        <br>
        <a href='/'>Back to Home </a>
        `
    )
})

app.post("/submit", (req, resp) => {
    console.log("user login details are : ", req.body);
    
    resp.send("<h1>Submit Page</h1>")
})

app.get("/users", (req, resp) => {
    resp.send("<h1>Users Page</h1>")
})

app.listen(3800);