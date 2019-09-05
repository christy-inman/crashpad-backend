const express = require('express')
const app = express()
// const cors = require('cors')
// const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.listen(port)


console.log(`Listening on port ${port}`)