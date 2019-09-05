const express = require('express')
const app = express()
// const cors = require('cors')
// const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const queries = require('./queries')

app.listen(port)

app.get('/', (request, response) => {
    queries.allUsers()
        .then(users => response.send(users))
})
app.delete('/:id', (request, response) => {
    queries.deleteUser(request.params.id)
        .then(response.status(204))
})

console.log(`Listening on port ${port}`)