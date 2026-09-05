import express from 'express'
import session from 'express-session';

// install package => npm install express-session

const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
// Session
app.use(session({
    secret:'applehp',
}))

app.get("/login", (req, resp)=>{
    resp.render('login')
})

app.post("/profile", (req, resp)=>{
    
    req.session.data=req.body;

    resp.render('profile')
})

app.get("/", (req, resp)=>{
    let sessionData = req.session.data
    
    if (!sessionData) {
        return res.send("No session found");
    }

    console.log(sessionData);
    
    resp.render('home', {sessionData})
})

app.listen(3800);