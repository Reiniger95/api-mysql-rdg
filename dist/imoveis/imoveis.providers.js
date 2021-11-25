"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imoveisProviders = void 0;
const imoveis_entity_1 = require("./entities/imoveis.entity");
exports.imoveisProviders = [
    {
        provide: 'IMOVEIS_REPOSITORY',
        useFactory: (connection) => connection.getRepository(imoveis_entity_1.Imoveis),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=imoveis.providers.js.map