const dotenv = require('dotenv')
dotenv.config({ path: '../../.env' })
const { Mongodb: db } = require("./infra/database')
const dbDrive = process.env.DB_DRIVER
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbName = process.env.DB_NAME
const dbConn = `${dbDrive}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}`
const port = process.env.API_PORT || 8001
const app = require('./app')

db.connect(dbConn, dbName)
  .then((db) =>
    app.listen(port, () => console.log(`Server Listen on port ${port}...`)),
  )
  .catch((error) => process.exit(1))
