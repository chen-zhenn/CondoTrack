const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
const { Mongodb: db } = require('./infra/database')
const dbConn = process.env.DB_CONN
const port = process.env.API_PORT || 8001
const app = require('./app')

db.connect(dbConn)
  .then(() => {
    app.listen(port, () => console.log(`Server Listen on port ${port}...`))
  })
  .catch((error) => process.exit(1))
