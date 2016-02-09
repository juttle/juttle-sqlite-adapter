var TestUtils = require('juttle-sql-adapter-common/test/utils');

TestUtils.getAdapterClass = function () {
    return require('../');
};
TestUtils.getAdapterConfig = function (useFake) {
    return useFake ? {
        "connection": {
            "filename": "./not_a_dir/false_dir/mydb.sqlite"
        }
    } : {
        "connection": {
            "filename": "./mydb.sqlite"
        }
    };
};
module.exports = TestUtils;
