import express from 'express';

const app = express();

// called 1st route
app.set('view engine', 'ejs');

app.get("/", (req, resp) => {
    // resp.send("<h1>Home Page</h1>");
    resp.render('home', {name:'Hiral Patel', course:'EJS | Template engine in express JS'});
})


app.listen(3800);