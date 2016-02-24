'use strict';

let SqlCommonRead = require('juttle-sql-adapter-common/lib/read');
let db = require('./db');

class Read extends SqlCommonRead {
    getDbConnection(options) {
        return db.getDbConnection(options);
    }
}
module.exports = Read;
