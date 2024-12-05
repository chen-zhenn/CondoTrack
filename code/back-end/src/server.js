const dotenv = require('dotenv')
dotenv.config({ path: '../../.env' })
const { Mongodb: db } = require('./infra/database')
const dbDrive = process.env.DB_DRIVER
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbName = process.env.DB_NAME
const dbConn = `${dbDrive}://${dbHost}:${dbPort}/${dbName}`
const port = process.env.API_PORT || 8001
const app = require('./app')

db.connect(dbConn)
  .then(() => {
    app.listen(port, () => console.log(`Server Listen on port ${port}...`))
  })
  .catch((error) => process.exit(1))
