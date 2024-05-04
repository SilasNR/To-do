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
exports.FiliacaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const filiacao_entity_1 = require("../entity/filiacao.entity");
let FiliacaoService = class FiliacaoService {
    constructor(filiacaoRepository) {
        this.filiacaoRepository = filiacaoRepository;
    }
    async findAll() {
        return await this.filiacaoRepository.find({ relations: ['filiacoes'] });
    }
    async findOne(id) {
        const Filiacao = await this.filiacaoRepository.findOne({
            where: { id_filiacao: id },
            relations: ['filiacoes'],
        });
        if (!Filiacao) {
            throw new common_1.HttpException(`Projeto não encontrado.`, common_1.HttpStatus.NOT_FOUND);
        }
        return Filiacao;
    }
    async create(createFiliacao) {
        try {
            return await this.filiacaoRepository.save(this.filiacaoRepository.create(createFiliacao));
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.HttpException('Filiacao já registrado.', common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException('Erro ao registrar nova filiacao. Tente novamente mais tarde', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async update(id, updateFiliacao) {
        const result = await this.filiacaoRepository.update(id, updateFiliacao);
        if (result.affected === 0) {
            throw new common_1.HttpException(`filiacao não econtrada.`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async delete(id) {
        const result = await this.filiacaoRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.HttpException(`filiacao não encontrada`, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.FiliacaoService = FiliacaoService;
exports.FiliacaoService = FiliacaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(filiacao_entity_1.filiacao)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FiliacaoService);
//# sourceMappingURL=filiacao.service.js.map