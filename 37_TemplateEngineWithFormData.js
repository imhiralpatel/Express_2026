import express from 'express';

const app = express();

app.use(express.urlencoded({extended:false}));
// called 1st route
app.set('view engine', 'ejs');
//app.set("views", "./views22");
app.get("/add-user", (req, resp) => {
    // resp.send("<h1>Home Page</h1>");
    resp.render('addUsers');
})

app.post("/submit-user", (req, resp) => {
    resp.render('SubmitUser', req.body)
})

app.get("/users", (req, resp) => {
    const users=['Hiral', 'Jayna', 'Yogesh', 'Aarav', 'Fenil']
    resp.render('userdata',{uname:users, isLogin:true});
})

app.listen(3800);