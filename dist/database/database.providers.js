"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const config = require("./ormconfig");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory() {
            return (0, typeorm_1.createConnection)(config);
        }
    }
];
//# sourceMappingURL=database.providers.js.map