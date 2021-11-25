"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImoveisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const imoveis_entity_1 = require("./entities/imoveis.entity");
let ImoveisService = class ImoveisService {
    constructor(imoveisRepository) {
        this.imoveisRepository = imoveisRepository;
    }
    async importacao() {
        const excelToJson = require('convert-excel-to-json');
        const result = excelToJson({
            sourceFile: 'aluguel.xlsx',
            header: {
                rows: 1
            },
            columnToKey: {
                A: 'tipo',
                B: "bairro",
                C: 'quartos',
                D: 'vagas',
                E: 'suites',
                F: 'area',
                G: 'valor',
                H: 'condominio',
                I: 'iptu'
            }
        });
        result['aluguel'].forEach((element) => {
            this.imoveisRepository
                .createQueryBuilder()
                .insert()
                .into(imoveis_entity_1.Imoveis)
                .values(element)
                .execute();
        });
        return 'Finish';
    }
    async buscaTipo(tipo) {
        const result = await this.imoveisRepository.createQueryBuilder('imoveis')
            .where('imoveis.tipo = :tipo', { tipo: tipo }).getMany();
        return result;
    }
    async buscaTipo2(tipo) {
        const result = await this.imoveisRepository.createQueryBuilder('imoveis')
            .where('imoveis.quartos > :tipo', { tipo: tipo }).getMany();
        return result;
    }
};
ImoveisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IMOVEIS_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ImoveisService);
exports.ImoveisService = ImoveisService;
//# sourceMappingURL=imoveis.service.js.map