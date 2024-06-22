/**
 * Sequelize Connection Config
 */
const path = require('path');
const { config } = require('dotenv');
config({ path: './.env' });
// console.log(path.resolve('../.env'));
const Sequelize = require('sequelize');

// Configuration for the master (write) connection
const masterConfig = {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    host: '127.0.0.1', // Master database host
    port: 3306, // Master database port
    dialect: 'mysql',
    logging: console.log,
};

// Configuration for the slave (read-only) connection
const slaveConfig = {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    host: '127.0.0.1', // Update this with your slave database's host
    port: 3307, // Slave database port
    dialect: 'mysql',
};

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PW, 
        {
        dialect: 'mysql',
        replication: {
            read: [slaveConfig],
            write: masterConfig
        },
        pool: {
            max: 10,      // Maximum number of connection in pool. This is the upper limit of connections that Sequelize will maintain in the pool.
            min: 0,       // Minimum number of connection in pool. Specifies the minimum number of connections that Sequelize will keep in the pool at all times.
            acquire: 30000, // Maximum time, in milliseconds, that pool will try to get connection before throwing error. Useful for setting how long a request can wait for a connection to become available.
            idle: 10000   // Maximum time, in milliseconds, that a connection can be idle before being released. Helps in freeing up unused connections to manage resources efficiently.
        },
        logging: console.log, // Optional: for debugging SQL queries
    });
}

module.exports = sequelize;