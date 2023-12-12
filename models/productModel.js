const pgClient = require('../config/database')

const productSchema = () => {
    try{
      const query = `
          CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(20),
            price INT,
            description VARCHAR(100)
          );
        `
      const productTable = pgClient.query(query, (err) => {
        if(err) console.log(err)
        else console.log('Table created')
      })
    }catch(e){
      console.log('failed to create table', e)
    }
  }

  productSchema()
  
  module.exports = productSchema