import express from 'express';

const app = express();

app.get("/", (req, resp) => {
    const users=['hiral', 'jayna', 'yogesh', 'Aarav', 'fenil']
    
    let data = "<ul>";

    for(let i=0; i < users.length; i++)
    {
        data += `<li><a href='user/${users[i]}'>${users[i].toUpperCase()}</a></li>`
    }
    data += "</ul>";

    resp.send(data);
})

// Dynamic Routes
app.get("/user/:name", (req, resp)=> {
    const userName = req.params.name;
    resp.send(`this is ${userName.charAt(0).toUpperCase() + userName.slice(1)}'s profile page`)
})

app.listen(3800);