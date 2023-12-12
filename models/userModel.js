const db = require("../config/database");
const connection = require("../config/database");
const pgClient = require("../config/database");

// SQLITE SCHEMA USER SCHEMA 
// const userModel = async () => {
//     const users = await db.run(`CREATE TABLE users
//     (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name VARCHAR(40) NOT NULL,
//     email TEXT,
//     password VARCHAR(20) NOT NULL,
//     Phone INTEGER NOT NULL,
//     )`
//     )
//     return users
// }
// module.exports = userModel;

// SQL SERVER USER SCHEMA
// const createUserSchema = () => {
//   const sqlQuery = `
//       CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY,
//         name TEXT,
//         email VARCHAR(50),
//         password VARCHAR(40),
//       );
//     `;

//   connection.query(sqlQuery, (err) => {
//     if (err) {
//       console.error('Error creating schema:', err);
//     } else {
//       console.log('table created successfully');
//     }
//     connection.end();
//   });
// };
// createUserSchema();

// POSTGRESQL USER SCHEMAN
// const productSchema = () => {
//   try{
//     const query = `
//         CREATE TABLE IF NOT EXISTS products (
//           id SERIAL PRIMARY KEY,
//           name VARCHAR(20),
//           price INT,
//           description VARCHAR(100)
//         );
//       `
//     const productTable = pgClient.query(query, (err) => {
//       if(err) console.log(err)
//       else console.log('Table created')
//     })
//   }catch(e){
//     console.log('failed to create table', e)
//   }
// }

// module.exports = productSchema
