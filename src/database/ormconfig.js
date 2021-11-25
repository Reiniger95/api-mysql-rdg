"use strict";
var dotenv = require("dotenv");
var path_1 = require("path");
dotenv.config();
var connectionOptions = {
    type: 'mysql',
    host: process.env.HOST_BD,
    port: parseInt(process.env.PORT_BD, 10),
    username: process.env.USERNAME_BD,
    password: process.env.SENHA_BD,
    database: process.env.DATABASE_NAME,
    entities: [(0, path_1.join)(__dirname, '/../**/*.entity{.ts,.js}')],
    // We are using migrations, synchronize should be set to false.
    synchronize: true,
    dropSchema: false,
    connectTimeout: 1000000000,
    acquireTimeout: 1000000000,
    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    // migrationsRun: true,
    logging: true,
    migrations: [(0, path_1.join)(__dirname, 'migrations/*{.ts,.js}')],
    cli: {
        migrationsDir: 'C:/Users/USUARIO/Documents/api-mysql-rdg/src/database/migrations'
    }
};
module.exports = connectionOptions;
