import express from 'express'

const app = express();

function checkAgeMiddleware(req, resp, next){
    if(!req.query.age || req.query.age < 18){
        resp.send("<h1>You are not allowed to used this website</h1>")
    }
    else{
        next()
    }
}

app.get('/', (req, resp) => {
    resp.send("<h1>Home Page</h1>")
})

app.get('/users', checkAgeMiddleware, (req, resp) => {
    resp.send("<h1>Users Page</h1>")
})

app.get('/login', (req, resp) => {
    resp.send("<h1>Login Page</h1>")
})

app.get('/products', checkAgeMiddleware, (req, resp) => {
    resp.send("<h1>Product Page</h1>")
})

app.listen(3800);