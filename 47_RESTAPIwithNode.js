import express from 'express'
import { sql, poolPromise } from "./db.js";

const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// UI Data
app.get("/ui", async (req, resp) => {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM tblStudent");
    const student = result.recordset;
    //console.log(student);
    resp.render('students', { student })
})

// UI - Add
app.get("/ui/add", (req, resp) => {
    resp.render('Add-Student')
})

// UI - Post
app.post("/add-student", async (req, resp) => {
    const { name, email, age } = req.body;
    const pool = await poolPromise;
    const result = await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("email", sql.VarChar, email)
        .input("age", sql.Int, age)
        .query(`
        INSERT INTO tblStudent (sname, semail, sage)
        VALUES (@name, @email, @age)
      `);

    console.log(result);

    resp.send("Data Saved...!");
})

// UI - Delete
app.get("/ui/delete/:id", async (req, resp) => {
    const { id } = req.params;
    console.log(id);
    const pool = await poolPromise;
    const result = await pool.request()
    .input("id", sql.Int, id)
    .query("Delete FROM tblStudent WHERE ID=@id");
    if (result) {
        resp.send("<h1>Student record deleted</h1><br><br><a href='/ui'>Back To Record</a>")
    }
    else {
        resp.send("<h1>Student record not deleted</h1><br><br><a href='/ui'>Back To Record</a>")
    }
})

// UI - Patch (Update Data fetch)
app.get("/ui/edit/:id", async(req, resp)=>{
    const { id } = req.params;
    //console.log(id);
    const pool = await poolPromise;
    const result = await pool.request().input("id", sql.Int, id).query("Select * from tblStudent WHERE ID=@id");
    const student = result.recordset;
    //resp.send({student})
    resp.render('Edit-Student', {student})
})

// UI- PUT
app.post("/ui/update/:id", async (req, resp)=>{
    const { id } = req.params;
    const { name, email, age } = req.body;
    //console.log(id);
    const pool = await poolPromise;
    const result = await pool.request()
    .input("id", sql.Int, id)
    .input("name", sql.VarChar, name)
    .input("email", sql.VarChar, email)
    .input("age", sql.Int, age)
    .query("Update tblStudent SET sname=@name,sage=@age,semail=@email WHERE ID=@id");
    
    if(result){
        resp.send("Data Updated...")
    }
    else
    {
        resp.send("data not updated...")
    }
})



// API - Data
app.get("/stud/api", async (req, resp) => {
    const pool = await poolPromise;

    const result = await pool.request().query("SELECT * FROM tblStudent");

    resp.send(result.recordset);
})

// API - ADD
app.post("/stud/add-api", async (req, resp) => {
    //console.log(req.body);
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        resp.send({ message: "Operation failed", success: false })
        return false;
    }

    const pool = await poolPromise;
    const result = await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("email", sql.VarChar, email)
        .input("age", sql.Int, age)
        .query(`
        INSERT INTO tblStudent (sname, semail, sage)
        VALUES (@name, @email, @age)
      `);

    const student = result.recordset[0];
    resp.send({ message: "Add Successfully", success: true, data: student })
})

// API - Delete
app.delete("/stud/delete/:id", async (req, resp) => {
    const { id } = req.params;
    console.log(id);
    const pool = await poolPromise;

    const result = await pool.request().input("id", sql.Int, id).query("Delete FROM tblStudent WHERE ID=@id");
    if (result) {
        resp.send({ message: "Student data deleted", success: true })
    }
    else {
        resp.send({ message: "Student data not deleted, try after sometime", success: false })
    }
})

// API - Patch (Update Data fetch)
app.get("/stud/edit/:id", async(req, resp)=>{
    const { id } = req.params;
    //console.log(id);
    const pool = await poolPromise;
    const result = await pool.request().input("id", sql.Int, id).query("Select * from tblStudent WHERE ID=@id");
    const student = result.recordset;
    if (result) {
        resp.send({message : "Data fetching...", success : true, data : student})
    }
    else{
        resp.send({message : "Data not fetching...", success : false})
    }

})

// API- PUT
app.put("/stud/update/:id", async (req, resp)=>{
    const { id } = req.params;
    const { name, email, age } = req.body;
    //console.log(id);
    const pool = await poolPromise;
    const result = await pool.request()
    .input("id", sql.Int, id)
    .input("name", sql.VarChar, name)
    .input("email", sql.VarChar, email)
    .input("age", sql.Int, age)
    .query("Update tblStudent SET sname=@name,sage=@age,semail=@email WHERE ID=@id");
    
    if (result) {
        resp.send({message : "Data updated...", success : true, data : req.body})
    }
    else{
        resp.send({message : "Data not updated...", success : false})
    }
})

app.listen(3800);