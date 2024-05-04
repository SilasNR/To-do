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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filiacao = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Filiacao = class Filiacao {
};
exports.Filiacao = Filiacao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Filiacao.prototype, "id_filiacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (User) => User.Filiacao),
    (0, typeorm_1.JoinColumn)({ name: 'id_login' }),
    __metadata("design:type", user_entity_1.User)
], Filiacao.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 40 }),
    __metadata("design:type", String)
], Filiacao.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 40 }),
    __metadata("design:type", String)
], Filiacao.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30 }),
    __metadata("design:type", String)
], Filiacao.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 40 }),
    __metadata("design:type", String)
], Filiacao.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 40 }),
    __metadata("design:type", String)
], Filiacao.prototype, "uf", void 0);
exports.Filiacao = Filiacao = __decorate([
    (0, typeorm_1.Entity)('filiacao')
], Filiacao);
exports.default = Filiacao;
//# sourceMappingURL=filiacao.entity.js.map