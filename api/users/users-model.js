const db = require('../../data/dbConfig')

function find() {
    return db('users')
        .select('id', 'password', 'username')
}

function findBy(filter) {
    return db('users')
        .select('id', 'username', 'password')
        .where(filter)
}

function findById(userId) {
    return db('users')
        .where('id', userId)
        .first()
}

async function create(user) {
    const [ id ] = await db('users')
        .insert(user)
    return findById(id)
}

module.exports = {
    find,
    findBy,
    findById,
    create
}