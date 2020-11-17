const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10, // 最大连接数
    host: '10.31.162.73',
    user: 'root',
    password: '136406',
    database: 'huawei'
});

module.exports = pool;