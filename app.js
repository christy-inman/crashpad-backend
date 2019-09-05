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
app.get('/:id', (request, response) => {
    queries.getById(request.params.id)
        .then(user => response.send(user))
})
app.post('/', (request, response) => {
    queries.createUser(request.body)
        .then(response.status(201))
})
app.put('/:id', (request, response) => {
    queries.updateUser(request.params.id, request.body)
        .then(user => response.send(user))
})

console.log(`Listening on port ${port}`)