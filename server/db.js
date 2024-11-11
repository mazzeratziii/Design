const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'talent_constellation',
    password: '11052003',
    port: 5432,
});

module.exports = pool;
