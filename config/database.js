// const mongoose = require('mongoose');
const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();
const mysql = require('mysql2')
const filepath = './SQL_experiment.db'

// MONGO CONNECTION
// mongoose.connect("mongodb://localhost:27017/experiments");
// console.log("Mongodb database connected");

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

// MYSQL CONNECTION
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Mahatab',
    password: '123',
    database: 'testDB'
  });

connection.connect((err) => {
    if(err) console.log(err)
    console.log('Database connected')
})

// db.serialize(() => {
// Queries scheduled here will be serialized.
//     db.run('CREATE TABLE greetings(message text)')
//       .run(`INSERT INTO greetings(message)
//             VALUES('Hi')`)
//       .each(`SELECT message FROM greetings`, (err, row) => {
//         if (err){
//           throw err;
//         }
//         console.log(row.message);
//       });
//   });

// Close the database connection
// db.close((err) => {
//     if(err){
//         return console.error(err.message)
//     }
//     console.log('Database connection closed')
// })