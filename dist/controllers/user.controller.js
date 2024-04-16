"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.login = exports.refresh = exports.find = void 0;
const prisma_1 = __importDefault(require("../libs/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserService = __importStar(require("../services/user.service"));
const boom_1 = __importDefault(require("@hapi/boom"));
const find = async (req, res) => {
    const users = await prisma_1.default.user.findMany();
    res.json(users);
};
exports.find = find;
const refresh = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { accessToken } = await UserService.refresh(userId);
        res.json(accessToken);
    }
    catch (error) {
        next(error);
    }
};
exports.refresh = refresh;
const login = async (req, res, next) => {
    try {
        const { accessToken, refreshToken } = await UserService.login(req.body);
        res.cookie('refreshToken', `Bearer ${refreshToken}`, { httpOnly: true });
        res.json(accessToken);
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
const signup = async (req, res, next) => {
    const { name, email, password, address, isAdmin } = req.body;
    let result;
    try {
        result = await prisma_1.default.user.create({
            data: {
                name,
                email,
                isAdmin: isAdmin,
                password: await bcrypt_1.default.hash(password, 10),
            },
        });
    }
    catch (err) {
        if (err.code === 'P2002') {
            next(boom_1.default.conflict('email has to be unique'));
            return;
        }
    }
    res.json(result);
};
exports.signup = signup;
// CRUD /profile/todos
// CRUD /todos
//# sourceMappingURL=user.controller.js.map