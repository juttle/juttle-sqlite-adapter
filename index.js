/*
    Juttle SQLite Adapter
*/

var _ = require('underscore');
var util = require("util");
var SqlAdapterCommon = require('juttle-sql-adapter-common');
var Knex = require('knex');

var REQUIRED_CONFIG_PROPERTIES = ['filename'];

function _assign_knex_getter() {
    var db = require('juttle-sql-adapter-common/lib/db');
    db.getKnex = function(singleDBConfig, options) {
        options = options || {};

        var conf = _.clone(singleDBConfig);
        if (options.db) {
            conf.filename = options.db;
        }

        var conn = getConnectionProperty(conf);

        return Knex({
            "client": "sqlite3",
            "connection": conn
        });
    };
}

function getConnectionProperty(singleDBConfig) {
    _.each(REQUIRED_CONFIG_PROPERTIES, function(prop) {
        if (!singleDBConfig.hasOwnProperty(prop)) {
            throw new Error('Each configuration must contain a field: ' + prop);
        }
    });

    return {
        filename: singleDBConfig.filename
    };
}

function SqliteAdapter(config) {
    var baseSql = SqlAdapterCommon.call(this, config);
    _assign_knex_getter();

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
