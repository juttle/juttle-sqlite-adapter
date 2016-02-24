/*
    Juttle SQLite Adapter
*/
'use strict';

let db = require('./db');

function SqliteAdapter(config) {
    db.init(config);

    return {
        name: 'sqlite',
        read: require('./read'),
        write: require('./write'),
        optimizer: require('juttle-sql-adapter-common/lib/optimize')
    };
}

module.exports = SqliteAdapter;
