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
exports.findRestroById = exports.remove = exports.update = exports.create = exports.getAll = void 0;
const restroService = __importStar(require("../services/restro.service"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAll = async (req, res, next) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    try {
        const data = await restroService.getAll();
        res.json(data);
    }
    catch (err) {
        next(err);
    }
};
exports.getAll = getAll;
const create = async (req, res, next) => {
    try {
        const data = await restroService.create(req.body);
        res.json(data);
    }
    catch (err) {
        next(err);
    }
};
exports.create = create;
const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const loggedInUserId = req.user.userId;
        const post = await restroService.update(Number(id), req.body);
        res.status(http_status_codes_1.default.CREATED).json(post);
    }
    catch (e) {
        next(e);
    }
};
exports.update = update;
const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        // @TODO: Handle errors
        const post = await restroService.remove(Number(id));
        res.status(http_status_codes_1.default.NO_CONTENT).json(post);
    }
    catch (e) {
        next(e);
    }
};
exports.remove = remove;
const findRestroById = async (req, res, next) => {
    try {
        const data = await restroService.findRestroById(Number(req.params.id));
        res.json(data);
    }
    catch (err) {
        next(err);
    }
};
exports.findRestroById = findRestroById;
//# sourceMappingURL=restro.controller.js.map