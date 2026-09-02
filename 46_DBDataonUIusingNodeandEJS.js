import express from 'express'
import sql from 'mssql'

const config = {
  server: "103.172.56.213",
  user: "sa",
  password: "Niy@ti@2312",
  port:1433,
  database: "practicedb",

  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

const app = express();

app.set('view engine', 'ejs');

app.get("/", async(req, resp)=>{
    await sql.connect(config);

        const result = await sql.query`
          SELECT * from tblStudent
        `;
    
        const student = result.recordset;
        //console.log(student);
    resp.render('students', {student})
})

app.listen(3800);