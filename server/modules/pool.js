const pg = require('pg')

let databaseName = 'my-battle-game'

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: databaseName,
    // allowExitOnIdle: true 
})

module.exports = pool