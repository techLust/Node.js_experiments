const mongoose = require('mongoose');
// const sqlite3 = require('sqlite3').verbose();
const sqlite3 = require('sqlite3').verbose();

// MONGO CONNECTION
mongoose.connect("mongodb://localhost:27017/experiments");
console.log("Mongodb database connected");

// SQL CONNECTION
let db = new sqlite3.Database('./exp_SQLdb.db', err => {
    if(err){
        return console.error(err.message);
    }
    console.log('SQL database connected')
});


// db.serialize(() => {
//     db.each(`SELECT PlaylistId as id,
//                     Name as name
//              FROM playlists`, (err, row) => {
//       if (err) {
//         console.error(err.message);
//       }
//       console.log(row.id + "\t" + row.name);
//     });
//   });

  
//Close the database connection
db.close((err) => {
    if(err){
        return console.error(err.message)
    }
    console.log('Database connection closed')
})