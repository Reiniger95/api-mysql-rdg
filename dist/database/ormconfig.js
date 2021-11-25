"use strict";
const dotenv = require("dotenv");
const path_1 = require("path");
dotenv.config();
const connectionOptions = {
    type: 'mysql',
    host: process.env.HOST_BD,
    port: parseInt(process.env.PORT_BD, 10),
    username: process.env.USERNAME_BD,
    password: process.env.SENHA_BD,
    database: process.env.DATABASE_NAME,
    entities: [(0, path_1.join)(__dirname, '/../**/*.entity{.ts,.js}')],
    synchronize: false,
    dropSchema: false,
    connectTimeout: 1000000000,
    acquireTimeout: 1000000000,
    logging: true,
    migrations: [(0, path_1.join)(__dirname, 'migrations/*{.ts,.js}')],
    cli: {
        migrationsDir: 'C:/Users/USUARIO/Documents/api-mysql-rdg/src/database/migrations'
    }
};
module.exports = connectionOptions;
//# sourceMappingURL=ormconfig.js.map