"use strict";
exports.__esModule = true;
exports.imoveisProviders = void 0;
var imoveis_entity_1 = require("./entities/imoveis.entity");
exports.imoveisProviders = [
    {
        provide: 'IMOVEIS_REPOSITORY',
        useFactory: function (connection) { return connection.getRepository(imoveis_entity_1.Imoveis); },
        inject: ['DATABASE_CONNECTION']
    }
];
