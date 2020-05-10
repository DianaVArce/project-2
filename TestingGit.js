const mySQL = require('mysql');

const chpConnection = mySQL.createConnection({
    debug: false,
    host: '127.0.0.1',
    port: '3306',
    user: 'darcehe_cs355sp20',
    password: 'ar7246038',
    database: 'darcehe_cs355sp20'
});

module.exports = chpConnection;

//TEST TO SEE IF GIT WORKS