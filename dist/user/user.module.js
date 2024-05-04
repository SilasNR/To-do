"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("../app.controller");
const app_service_1 = require("../app.service");
const database_module_1 = require("../database/database.module");
const user_entity_1 = require("./entity/user.entity");
const filiacao_entity_1 = require("./entity/filiacao.entity");
const equipe_entity_1 = require("./entity/equipe.entity");
const projeto_entity_1 = require("./entity/projeto.entity");
const tarefa_entity_1 = require("./entity/tarefa.entity");
const etiqueta_entity_1 = require("./entity/etiqueta.entity");
const user_service_1 = require("./service/user.service");
const filiacao_service_1 = require("./service/filiacao.service");
const projeto_service_1 = require("./service/projeto.service");
const user_controller_1 = require("./controller/user.controller");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, filiacao_entity_1.filiacao, equipe_entity_1.Equipe, projeto_entity_1.Projeto, tarefa_entity_1.Tarefa, etiqueta_entity_1.Etiqueta]),
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController],
        providers: [app_service_1.AppService, user_service_1.UserService, filiacao_service_1.FiliacaoService, projeto_service_1.ProjetoService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map