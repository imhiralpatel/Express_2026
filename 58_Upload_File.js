import express from 'express'
import multer from 'multer';

const app = express();

const storage=multer.diskStorage({
    destination:function (req, file, cb){
        cb(null, 'upload')
    },
    filename:function(req, file, cb){
        cb(null, file.originalname)
    },
})
const upload = multer({storage})
//const upload = multer({dest:'upload'})

app.get("/", (req, resp)=>{
    resp.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="myfile">
        <br>
        <br>
        <button>Upload</button>
        </form>
        `)
})

app.post("/upload", upload.single('myfile'), (req, resp)=>{
    resp.send({
        message :"file uploaded",
        info:req.file
    })
})

app.listen(3800);