const app = require("express")();
require('./database')

app.listen(3000, () => console.log('Server running on 3000'))

