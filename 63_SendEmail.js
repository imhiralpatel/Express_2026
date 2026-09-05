import express from 'express'
import nodemailer from 'nodemailer';

// install Package => npm i nodemailer

const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:false}))

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'',
        pass:''
    }
})

app.get("/mail", (req, resp)=>{
    resp.render('mail');
})

app.post("/submit-email", (req, resp)=>{
    console.log(req.body);

    const mailOption = {
        from : '',
        to : '',
        subject : req.body.subject,
        text:req.body.mail
    }

    transporter.sendMail(mailOption, (error, info)=>{
        if(error){
            resp.send("email operation failed. try again...!")
        }
        else{
            resp.send("email sent")
        }
    })
    
    //resp.send("send email");
})

app.listen(3800)