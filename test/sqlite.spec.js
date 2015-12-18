var SharedSqlTests = require('juttle-sql-adapter-common/test/shared-sql.spec');
var TestUtils = require('juttle-sql-adapter-common/test/utils');
var sqlite_adapter = require('../');

var config = {
    "connection": {
        "filename": "./mydb.sqlite"
    }
};

TestUtils.init(config, sqlite_adapter);
SharedSqlTests();
