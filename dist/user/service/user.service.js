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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entity/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        return await this.userRepository.find({ relations: ['filiacoes'] });
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({
            where: { id_login: id },
            relations: ['filiacoes'],
        });
        if (!user) {
            throw new common_1.HttpException(`Usuário não encontrado.`, common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email: email },
            relations: ['filiacoes'],
        });
        if (!user) {
            throw new common_1.HttpException(`Usuário não encontrado.`, common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async create(createUserDto) {
        try {
            return await this.userRepository.save(this.userRepository.create(createUserDto));
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.HttpException('Email já registrado.', common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException('Erro ao criar o registro. Tente novamente mais tarde.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async update(id, updateUserDto) {
        const result = await this.userRepository.update(id, updateUserDto);
        if (result.affected === 0) {
            throw new common_1.HttpException(`Usuário não encontrado.`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async delete(id) {
        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.HttpException(`Usuário não encontrado.`, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map