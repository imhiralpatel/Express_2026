import express from 'express'
import path from 'path'
import abspath from './pages/abspath.js';

const app = express();
//const absPath = abspath();
const absPath = path.resolve('view');

const publicPath = path.resolve('public');

app.use(express.static(publicPath));

app.get("", (req, resp) => {
    //const absPath = path.resolve('view/home.html');
    resp.sendFile(absPath + '/home.html');
});

app.get("/login", (req, resp) => {
    //const absPath = path.resolve('view/login.html');
    resp.sendFile(absPath + '/login.html');
});

app.get("/about", (req, resp) => {
    //const absPath = path.resolve('view/about.html');
    resp.sendFile(absPath + '/about.html');
});


app.use((req, resp) => {
    resp.status(404).sendFile(absPath + '/404.html');
})


app.listen(3700);