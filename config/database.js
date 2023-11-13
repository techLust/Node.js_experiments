const mongoose = require('mongoose');
const sqlite3 = require('sqlite3').verbose();
const mysql = require('mysql2')
const fs = require('fs')
const filepath = './SQL_experiment.db';

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
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Mahatab',
    password: '123',
    database: 'testDB'
  });

connection.connect((err) => {
    if(err) console.log(err)
    console.log('SQL server database connected')
})

module.exports = connection

// CLOSE CONNECTION
// db.close((err) => {
//     if(err){
//         return console.error(err.message)
//     }
//     console.log('Database connection closed')
// })