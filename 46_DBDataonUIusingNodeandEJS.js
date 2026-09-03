import express from 'express'
import sql from 'mssql'
import dotenv from "dotenv";

dotenv.config();

const config = {
  server: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port:Number(process.env.DB_PORT),
  database: process.env.DB_NAME,

  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

const app = express();

app.use(express.json());
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

app.get("/users", async (req, res) => {
        try {
            const pool = await poolPromise;

            const result = await pool.request().query("SELECT * FROM tblStudent");

            res.json(result.recordset);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Database error" });
        }
    });

app.listen(3800);