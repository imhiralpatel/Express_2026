import sql from 'mssql'
import dotenv from "dotenv";

//const sql = require("mssql");
//const sql = sqldb();

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

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    //console.log("Database connected successfully");
    return pool;
  })
  .catch((error) => {
    //console.error("Database connection failed:", error);
    throw error;
  });

export { sql, poolPromise };
