"use strict";
exports.__esModule = true;
exports.databaseProviders = void 0;
var typeorm_1 = require("typeorm");
var config = require("./ormconfig");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: function () {
            return (0, typeorm_1.createConnection)(config);
        }
    }
];
