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
exports.Tarefa = void 0;
const typeorm_1 = require("typeorm");
const projeto_entity_1 = require("./projeto.entity");
class Tarefa {
}
exports.Tarefa = Tarefa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tarefa.prototype, "id_tarefa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => projeto_entity_1.Projeto, (Projeto) => Projeto.tarefa),
    (0, typeorm_1.JoinColumn)({ name: 'id_projeto' }),
    __metadata("design:type", projeto_entity_1.Projeto)
], Tarefa.prototype, "projeto", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Tarefa.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Tarefa.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Tarefa.prototype, "data_entrega", void 0);
exports.default = Tarefa;
//# sourceMappingURL=tarefa.entity.js.map