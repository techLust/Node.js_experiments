const connection = require('../config/database')

exports.registerUser = (req, res) => {
    try {
        console.log('registering user API  called')
        console.log(req.body)
        const { id, name, email, password } = req.body;
        const userDetails = connection.query(
            `INSERT INTO 
             users(id, name, email, password)
             VALUES(?, ?, ?, ?)`,
            [id, name, email, password],
            (err, data) => {
                if (err) console.log(err)
                console.log('Data insert successfull')
                return res.status(200).json({ status: 'success', data })
            }
        )
    } catch (e) {
        console.log(e)
        return res.status(500).json({ status: 'failed' })
    }
}

exports.getUser = (req, res) => {
    try {
        console.log('get user called')
        connection.query(`SELECT * FROM users`,
            (err, data) => {
                if (err) console.log(err)
                console.log(data)
                return res.status(200).json({ status: 'success', data })
            })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ status: 'failed', e })
    }
}

exports.getUserById = (req, res) => {
    try {
        console.log('get user called')
        const { id } = req.params
        connection.query(`SELECT * FROM users WHERE Id = ${id}`,
            (err, data) => {
                if (err) console.log(err)
                console.log(data)
                return res.status(200).json({ status: 'success', data })
            })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ status: 'failed', e })
    }
}

exports.updateUser = (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;

        console.log('update user API called', name, id)

        // connection.query("UPDATE users SET name = ? WHERE id = ?", "Mahatab", 2);
        connection.query(`UPDATE users SET Name = '${name}' WHERE Id = ${id}`,
            (err, data) => {
                if (err, data) console.log(err)
                console.log('data updated succesfull')
                return res.status(200).json({ status: 'success', data })
            }
        );
    } catch (e) {
        console.log(e)
        return res.status(500).json({ status: 'failed' })
    }
}

exports.deleteUser = (req, res) => {
    try {
        console.log('delete API called')
        const { id } = req.params;
        console.log('ID', id)
        connection.query(`DELETE FROM users WHERE Id = ${id}`,
            (err) => {
                if (err) console.log(err)
                console.log('Data deleted successfull')
                return res.status(200).json({ status: 'success' })
            }
        )
    } catch (e) {
        console.log('failed to delete')
        return res.status(500).json({ status: 'failed' })
    }
}