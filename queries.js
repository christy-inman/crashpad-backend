const database = require('./database-connection')

module.exports = {
    allUsers(){
        return database('users')
    }
}