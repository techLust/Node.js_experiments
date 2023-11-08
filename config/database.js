const mongoose = require('mongoose');
// const sqlite3 = require('sqlite3').verbose();
const sqlite3 = require('sqlite3').verbose();

// MONGO CONNECTION
// mongoose.connect("mongodb://localhost:27017/experiments");
// console.log("Mongodb database connected");

// SQL CONNECTION
let db = new sqlite3.Database('./exp_SQLdb.db', err => {
    if(err){
        return console.error(err.message);
    }
    console.log('SQL database connected')
});

// export default db

// db.run('CREATE TABLE langs(name text)');

// db.run(`INSERT INTO langs(name) VALUES(?)`, ['C'], function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//     // get the last insert id
//     console.log(`A row has been inserted with rowid ${this.lastID}`);
//   });


// db.each(`SELECT name FROM langs`, (err, row) => {
//     if (err){
//       throw err;
//     }
//     console.log("Message", row.message);
//   });

// db.serialize(() => {
//     // Queries scheduled here will be serialized.
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

db.each(`SELECT message FROM greetings`, (err, data) => {
    if(err) throw err
    console.log('Data', data)
})

// Close the database connection
// db.close((err) => {
//     if(err){
//         return console.error(err.message)
//     }
//     console.log('Database connection closed')
// })