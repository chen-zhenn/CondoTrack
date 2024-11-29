const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
const app = require('./app')
const port = process.env.API_PORT || 8001

app.listen(port, () => console.log(`Server Listen on port ${port}...`))
