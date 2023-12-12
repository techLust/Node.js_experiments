const pgClient = require('../config/database')
// const productSchema = require('../models/productModel') // Run once to create table

exports.createProduct = async (req, res) => {
    try {
        console.log('create product API called')
        const { name, price, description } = req.body;

        const insertDataQuery = `
        INSERT INTO products (name, price, description)
        VALUES ($1, $2, $3)
        RETURNING *;
      `;

        const values = [name, price, description];

        const result = await pgClient.query(insertDataQuery, values);

        console.log('Data inserted successfully:', result.rows);

        return res.status(200).json({ status: 'success', data: result.rows });

    } catch (e) {
        console.log('failed to create product', e)
        res.status(500).json({ status: 'failed', err: false, error: e.message })

    } finally {
        await pgClient.end()
        console.log('disconnected from the database')
    }
}