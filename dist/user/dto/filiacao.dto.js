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
exports.UpDateFiliacaoDto = exports.CreateFiliacaoDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
class CreateFiliacaoDto {
}
exports.CreateFiliacaoDto = CreateFiliacaoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 40, { message: 'o tamanho minimo do nome é 8 caracteres' }),
    __metadata("design:type", String)
], CreateFiliacaoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(12, 40, { message: 'o tamanho minimo do endereço é 12 caracteres' }),
    __metadata("design:type", String)
], CreateFiliacaoDto.prototype, "endereco", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 30, { message: 'o tamanho minimo do cidade é 8 caracteres' }),
    __metadata("design:type", String)
], CreateFiliacaoDto.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 30, { message: 'o tamanho minimo do bairro é 8 caracteres' }),
    __metadata("design:type", String)
], CreateFiliacaoDto.prototype, "bairro", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 2, { message: 'o tamanho minimo do nome é 2 caracteres' }),
    __metadata("design:type", String)
], CreateFiliacaoDto.prototype, "uf", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateFiliacaoDto.prototype, "userId", void 0);
class UpDateFiliacaoDto extends (0, mapped_types_1.PartialType)(CreateFiliacaoDto) {
}
exports.UpDateFiliacaoDto = UpDateFiliacaoDto;
//# sourceMappingURL=filiacao.dto.js.map