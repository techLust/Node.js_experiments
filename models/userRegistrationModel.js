const db = require("../config/database");

// USER SCHEMA
const userModel = async () => {
    const users = await db.run(`CREATE TABLE users
    (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(40) NOT NULL,
    email TEXT,
    password VARCHAR(20) NOT NULL,
    Phone INTEGER NOT NULL,
    )`
    )
    return users
}

module.exports = userModel;
