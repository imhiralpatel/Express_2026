import express from 'express'

const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.get("/login", (req, resp)=>{
    resp.render('login')
})

app.post("/profile", (req, resp)=>{
    resp.setHeader('Set-Cookie', "login=true")
    resp.setHeader('Set-Cookie', "name=" + req.body.name)

    resp.render('profile')
})

app.get("/", (req, resp)=>{
    const cookieData = req.get('cookie')
    cookieData = cookieData.split(";")
    cookieData = cookieData[1].split("=")
    resp.render('home', {name:cookieData[1]})
})

app.listen(3800);