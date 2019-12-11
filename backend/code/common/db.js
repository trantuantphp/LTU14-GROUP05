// db
const Sequelize  = require('sequelize');

var sequelize = new Sequelize(
    'chat_dds',
    'root',
    'Thutrang22$$',
    {
        host: '134.209.104.85',
        dialect: 'mysql'
    }
);

module.exports = sequelize;