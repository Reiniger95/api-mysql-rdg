"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Imoveis = void 0;
var typeorm_1 = require("typeorm");
var Imoveis = /** @class */ (function () {
    function Imoveis() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Imoveis.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Imoveis.prototype, "tipo");
    __decorate([
        (0, typeorm_1.Column)()
    ], Imoveis.prototype, "bairro");
    __decorate([
        (0, typeorm_1.Column)()
    ], Imoveis.prototype, "quartos");
    __decorate([
        (0, typeorm_1.Column)()
    ], Imoveis.prototype, "vagas");
    __decorate([
        (0, typeorm_1.Column)()
    ], Imoveis.prototype, "suites");
    __decorate([
        (0, typeorm_1.Column)()
    ], Imoveis.prototype, "area");
    __decorate([
        (0, typeorm_1.Column)()
    ], Imoveis.prototype, "valor");
    __decorate([
        (0, typeorm_1.Column)()
    ], Imoveis.prototype, "condominio");
    __decorate([
        (0, typeorm_1.Column)()
    ], Imoveis.prototype, "iptu");
    Imoveis = __decorate([
        (0, typeorm_1.Entity)({ name: 'base_imoveis' })
    ], Imoveis);
    return Imoveis;
}());
exports.Imoveis = Imoveis;
