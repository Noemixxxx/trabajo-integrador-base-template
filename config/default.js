require('dotenv').config();
module.exports = {
    database: {
        mongodb: {
            connectionString: process.env.DB_CONNECTION,
        },
    }
}