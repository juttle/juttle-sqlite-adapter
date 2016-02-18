var TestUtils = require('juttle-sql-adapter-common/test/utils');

TestUtils.getAdapterClass = function () {
    return require('../');
};
TestUtils.getAdapterConfig = function () {
    return [
        {
            id: 'default',
            filename: "./unit-test.sqlite"
        },
        {
            id: 'fake',
            filename: "./not_dir/should_not_work/not_db.sqlite"
        }
    ];
};
module.exports = TestUtils;
