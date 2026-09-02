import sql from 'mssql'

//const sql = require("mssql");
//const sql = sqldb();

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

// const config = {
//     server: "HIRAL",
//     database: "YOUR_DATABASE",

//     options: {
//         instanceName: "SQLEXPRESS",
//         encrypt: false,
//         trustServerCertificate: true
//     }
// };

async function connectDB() {
  try {
    await sql.connect(config);

    console.log("SQL Server Connected Successfully!");

    const result = await sql.query`
      SELECT GETDATE() AS currentTime
    `;

    console.log(result.recordset);
  } catch (error) {
    console.error("Connection failed:");
    console.error(error);
  }
}

connectDB();
