const db = require('../config/database')
const userModel = require('../models/userRegistrationModel')

exports.registerUser = async (req, res) => {
    try {
        console.log('registering user API  called')
        console.log(req.body)

        const tableName = await userModel()
        
        console.log('USER table created', tableName)
        const { name, email, password, phone } = req.body;
        console.log('before DB.run')
        const userDetails = await db.run(
            `INSERT INTO 
             users(name, email, password, phone)
             VALUES(?, ?, ?)`,
            [name, email, password, phone],
            (err) => {
                if (err) console.log('ERRORrrrrrrrr', err)
            }
        )
        console.log('after DB.run')

        return res.status(200).json({ status: 'success', userDetails })
    } catch (e) {
        console.log(e)
        return res.status(200).json({ status: 'failed', e })
    }
}

exports.getUser = (req, res) => {
    try {
        console.log('get user called')
        db.each(`SELECT * FROM users`, (err, data) => {
            if (err) console.log(err)
            console.log(data)
        })
    } catch (e) {
        console.log(e)
    }
}

exports.updateUser = (req, res) => {
    try {
        console.log('update user API called')
        // Directly in the function arguments.
        db.run("UPDATE tbl SET name = ? WHERE id = ?", "bar", 2);

        // As an array.
        db.run("UPDATE tbl SET name = ? WHERE id = ?", ["bar", 2]);

        // As an object with named parameters.
        db.run("UPDATE tbl SET name = $name WHERE id = $id", {
            $id: 2,
            $name: "bar"
        });
    } catch (e) {
        console.log(e)
    }
}