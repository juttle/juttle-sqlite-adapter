var TestUtils = require('juttle-sql-adapter-common/test/utils');

TestUtils.getDBClass = function () {
    return require('../lib/db');
};
TestUtils.getAdapterName = function () {
    return 'sqlite';
};
TestUtils.getAdapterConfig = function () {
    var conf = [
        {
            id: 'default',
            filename: "./unit-test.sqlite"
        },
        {
            id: 'fake',
            filename: "./not_dir/should_not_work/not_db.sqlite"
        }
    ];

    conf.path = './';
    return conf;
};

module.exports = TestUtils;
