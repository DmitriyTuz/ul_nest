"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UsersController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var users_model_1 = require("./users.model");
var roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
var roles_guard_1 = require("../auth/roles.guard");
var UsersController = /** @class */ (function () {
    function UsersController(usersService) {
        this.usersService = usersService;
    }
    UsersController.prototype.create = function (userDto) {
        return this.usersService.createUser(userDto);
    };
    UsersController.prototype.getAll = function () {
        return this.usersService.getAllUsers();
    };
    UsersController.prototype.addRole = function (dto) {
        return this.usersService.addRole(dto);
    };
    UsersController.prototype.ban = function (dto) {
        return this.usersService.ban(dto);
    };
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'User creation' }),
        (0, swagger_1.ApiResponse)({ status: 200, type: users_model_1.User })
        // @UsePipes(ValidationPipe)
        ,
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], UsersController.prototype, "create");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Getting all users' }),
        (0, swagger_1.ApiResponse)({ status: 200, type: [users_model_1.User] })
        // @UseGuards(JwtAuthGuard)
        ,
        (0, roles_auth_decorator_1.Roles)("ADMIN"),
        (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
        (0, common_1.Get)()
    ], UsersController.prototype, "getAll");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Add role' }),
        (0, swagger_1.ApiResponse)({ status: 200 })
        // @UseGuards(JwtAuthGuard)
        ,
        (0, roles_auth_decorator_1.Roles)("ADMIN"),
        (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
        (0, common_1.Post)('/role'),
        __param(0, (0, common_1.Body)())
    ], UsersController.prototype, "addRole");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Ban user' }),
        (0, swagger_1.ApiResponse)({ status: 200 })
        // @UseGuards(JwtAuthGuard)
        ,
        (0, roles_auth_decorator_1.Roles)("ADMIN"),
        (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
        (0, common_1.Post)('/ban'),
        __param(0, (0, common_1.Body)())
    ], UsersController.prototype, "ban");
    UsersController = __decorate([
        (0, swagger_1.ApiTags)('Users'),
        (0, common_1.Controller)('users')
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
