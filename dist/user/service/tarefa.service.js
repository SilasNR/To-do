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
exports.TarefaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tarefa_entity_1 = require("../entity/tarefa.entity");
let TarefaService = class TarefaService {
    constructor(tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }
    async findAll() {
        return await this.tarefaRepository.find({
            relations: ['projeto']
        });
    }
    async findOne(id) {
        const tarefa = await this.tarefaRepository.findOne({
            where: { id_tarefa: id },
            relations: ['projeto']
        });
        if (!tarefa) {
            throw new common_1.HttpException(`Tarefa não encontrada`, common_1.HttpStatus.NOT_FOUND);
        }
        return tarefa;
    }
    async create(createTarefaDto) {
        try {
            return await this.tarefaRepository.save(this.tarefaRepository.create(createTarefaDto));
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.HttpException('Tarefa já registrada.', common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException('Erro ao criar uma nova Tarefa. Tente novamente mais tarde.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async update(id, updateTarefaDto) {
        const result = await this.tarefaRepository.update(id, updateTarefaDto);
        if (result.affected === 0) {
            throw new common_1.HttpException(`Tarefa não encontrada`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async delete(id) {
        const result = await this.tarefaRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.HttpException(`Tarefa não econtrada.`, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.TarefaService = TarefaService;
exports.TarefaService = TarefaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tarefa_entity_1.Tarefa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TarefaService);
//# sourceMappingURL=tarefa.service.js.map