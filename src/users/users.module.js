"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var common_1 = require("@nestjs/common");
var users_controller_1 = require("./users.controller");
var users_service_1 = require("./users.service");
var sequelize_1 = require("@nestjs/sequelize");
var users_model_1 = require("./users.model");
var roles_model_1 = require("../roles/roles.model");
var user_roles_model_1 = require("../roles/user-roles.model");
var roles_module_1 = require("../roles/roles.module");
var auth_module_1 = require("../auth/auth.module");
var posts_model_1 = require("../posts/posts.model");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        (0, common_1.Module)({
            controllers: [users_controller_1.UsersController],
            providers: [users_service_1.UsersService],
            imports: [
                sequelize_1.SequelizeModule.forFeature([users_model_1.User, roles_model_1.Role, user_roles_model_1.UserRoles, posts_model_1.Post]),
                roles_module_1.RolesModule,
                (0, common_1.forwardRef)(function () { return auth_module_1.AuthModule; })
            ],
            exports: [
                users_service_1.UsersService,
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
