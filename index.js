/*
    Juttle SQLite Adapter
*/

var _ = require('underscore');
var util = require("util");
var SqlAdapterCommon = require('juttle-sql-adapter-common');

function SqliteAdapter(config, Juttle) {
    var clientSpecficConfig = {};

    if (config.connection) {
        clientSpecficConfig.knex = require('knex')({
            "client": "sqlite3",
            "connection": config.connection
        });
    }

    var baseSql = SqlAdapterCommon.call(this, clientSpecficConfig, Juttle);

    baseSql.name = 'sqlite';

    _.extend(baseSql.read, {
        procName: 'read-sqlite'
    });

    _.extend(baseSql.write, {
        procName: 'write-sqlite'
    });

    return baseSql;
}

util.inherits(SqliteAdapter, SqlAdapterCommon);
module.exports = SqliteAdapter;
