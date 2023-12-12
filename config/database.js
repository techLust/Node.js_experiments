const fs = require('fs')
require('dotenv').config()
const mongoose = require('mongoose');
const sqlite3 = require('sqlite3').verbose();
const filepath = './SQL_experiment.db';
const mysql = require('mysql2')
const { Client } = require('pg')

// MONGO CONNECTION
// const mongodbConnection = () =>{
//   try{
//     mongoose.connect("mongodb://localhost:27017/experiments");
//     console.log("Mongodb database connected");
//   }catch(e){
//     console.log(e)
//   }
// }
// mongodbConnection()

// SQLITE CONNECTION
// const createDbConnection = () => {
//     if (fs.existsSync(filepath)) {
//         console.log('Database connected')
//         return new sqlite3.Database(filepath)
//     } else {
//         const db = new sqlite3.Database(filepath, err => {
//             if (err) {
//                 return console.error(err.message);
//             }
//         });
//         console.log('SQL database connected')
//         return db
//     }
// }
// db = createDbConnection();
// module.exports = db

// MYSQL_SERVER CONNECTION
// const connection = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.MYSQL_SERVER_USER,
//   password: process.env.MYSQL_SERVER_PASS,
//   database: 'testDB'
// });

// connection.connect((err) => {
//   if (err) console.log(err)
//   console.log('SQL server database connected')
// })
// module.exports = connection

// POSTGRESQL CONNECTION  
const connectionString = `postgresql://
${process.env.POSTGRES_USER}:
${process.env.POSTGRES_PASS}@
${process.env.HOST}:
${process.env.POSTGRES_PORT}/
${process.env.POSTGRES_DB}`;

const pgClient = new Client({ connectionString });

pgClient.connect()
  .then(() => {
    console.log('Postgres database connected ')
    return dbName = pgClient.query('SELECT datname from pg_database;')
  })
  // .then((result) => {
  //   console.log('DB NAME', result.rows[3].datname)
  // })
  .catch(err => console.error('Error connecting to the database', err));

  module.exports = pgClient;

// CLOSE CONNECTION
// db.close((err) => {
//     if(err){
//         return console.error(err.message)
//     }
//     console.log('Database connection closed')
// })