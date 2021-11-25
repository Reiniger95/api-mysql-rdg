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
exports.ImoveisController = void 0;
const common_1 = require("@nestjs/common");
const imoveis_service_1 = require("./imoveis.service");
let ImoveisController = class ImoveisController {
    constructor(imoveisService) {
        this.imoveisService = imoveisService;
    }
    importacao() {
        return this.imoveisService.importacao();
    }
    async buscaTipo(params) {
        const response = await this.imoveisService.buscaTipo(params.tipo);
        return response;
    }
    async buscaTipo2(params) {
        const response = await this.imoveisService.buscaTipo2(params.tipo);
        return response;
    }
};
__decorate([
    (0, common_1.Get)('importacao'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ImoveisController.prototype, "importacao", null);
__decorate([
    (0, common_1.Get)('buscaTipo/:tipo'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImoveisController.prototype, "buscaTipo", null);
__decorate([
    (0, common_1.Get)('buscaTipo2/:tipo'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImoveisController.prototype, "buscaTipo2", null);
ImoveisController = __decorate([
    (0, common_1.Controller)('imoveis'),
    __metadata("design:paramtypes", [imoveis_service_1.ImoveisService])
], ImoveisController);
exports.ImoveisController = ImoveisController;
//# sourceMappingURL=imoveis.controller.js.map