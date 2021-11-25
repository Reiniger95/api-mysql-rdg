"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseImoveis1637528255217 = void 0;
const typeorm_1 = require("typeorm");
class baseImoveis1637528255217 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: 'base_imoveis',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'tipo',
                    type: 'varchar',
                    length: '210',
                    isNullable: true
                },
                {
                    name: 'bairro',
                    type: 'varchar',
                    length: '210',
                    isNullable: true
                },
                { name: 'quartos', type: 'double', isNullable: true },
                { name: 'vagas', type: 'double', isNullable: true },
                { name: 'suites', type: 'double', isNullable: true },
                { name: 'area', type: 'double', isNullable: true },
                { name: 'valor', type: 'double', isNullable: true },
                { name: 'condominio', type: 'double', isNullable: true },
                { name: 'iptu', type: 'double', isNullable: true }
            ]
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.baseImoveis1637528255217 = baseImoveis1637528255217;
//# sourceMappingURL=1637528255217-baseImoveis.js.map