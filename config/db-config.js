import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config(process.cwd(), '.env');

const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    port : process.env.DB_PORT, 
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}); 

connect.connect((err) => {
  if (!err) console.log(`✅ -- MySql is connected on ${process.env.DB_NAME}'s database -- ✅ `);
  else console.log("-- 👎 -- Error connecting MySql : -- 👎 -- ", err);
});

export default connect;


