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
exports.UpDateEtiquetaDto = exports.CreateEtiquetaDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const typeorm_1 = require("typeorm");
class CreateEtiquetaDto {
}
exports.CreateEtiquetaDto = CreateEtiquetaDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CreateEtiquetaDto.prototype, "id_etiqueta", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 20, { message: 'tamanho minimo para o nome é de 4 caracteres' }),
    __metadata("design:type", String)
], CreateEtiquetaDto.prototype, "nome_etiqueta", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CreateEtiquetaDto.prototype, "cor", void 0);
class UpDateEtiquetaDto extends (0, mapped_types_1.PartialType)(CreateEtiquetaDto) {
}
exports.UpDateEtiquetaDto = UpDateEtiquetaDto;
//# sourceMappingURL=etiqueta.dto.js.map