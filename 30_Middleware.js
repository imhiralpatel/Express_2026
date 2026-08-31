import express from 'express'

const app = express();

function checkRoute(req, resp, next){
    console.log(req.url);
    next();
}

//app.use(checkRoute);

function ageCheck(req, resp, next){
    if(!req.query.age || req.query.age < 18){
        resp.send("Alert...!, You can not access this Page");
    }
    else{
        next();
    }
}

app.use(ageCheck);

function ipCheck(req, resp, next){
    const ip = req.socket.remoteAddress;

    if(ip.includes('192.168.1.95')){
        resp.send("Alert...!, You can not access this Page");
    }
    else{
        next();
    }
    
}

//app.use(ipCheck);

app.get('/', (req, resp) => {
    resp.send("Home Page")
})

app.get('/login', (req, resp) => {
    resp.send("Login Page")
})

app.get('/admin', (req, resp) => {
    resp.send("Admin Page")
})

app.listen(3800);
