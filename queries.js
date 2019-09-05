const database = require('./database-connection')

module.exports = {
    allUsers() {
        return database('users')
    },
    deleteUser(id) {
        return database('users')
            .where({id})
            .delete()
    },
    getById(id) {
        return database('users')
            .where({id})
            .first()
    },
    createUser(user) {
        return database('users')
            .insert(user)
    },
    updateUser(id, user) {
        return database('users')
            .where({id})
            .update(user)
    }
}