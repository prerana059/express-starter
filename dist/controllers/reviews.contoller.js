"use strict";
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
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
exports.deleteById = exports.updateByID = exports.findAll = exports.findByID = exports.create = void 0;
const reviewsService = __importStar(require("../services/reviews.service"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const create = async (req, res, next) => {
    console.log('request params', req.params);
    try {
        const resturantId = Number(req.params.id);
        const data = await reviewsService.createResturant(req.body, req.user.userId, resturantId);
        res.json(data);
    }
    catch (err) {
        next(err);
    }
};
exports.create = create;
const findByID = async (req, res, next) => {
    try {
        const data = await reviewsService.findresturantById(Number(req.params.id));
        res.json(data);
    }
    catch (err) {
        next(err);
    }
};
exports.findByID = findByID;
const findAll = async (req, res, next) => {
    try {
        const data = await reviewsService.getAll();
        res.json(data);
    }
    catch (err) {
        next(err);
    }
};
exports.findAll = findAll;
const updateByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const loggedInUserId = req.user.userId;
        const post = await reviewsService.updateResturantById(Number(id), req.body);
        res.status(http_status_codes_1.default.CREATED).json(post);
    }
    catch (e) {
        next(e);
    }
};
exports.updateByID = updateByID;
const deleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // @TODO: Handle errors
        const post = await reviewsService.deleteById(Number(id));
        res.status(http_status_codes_1.default.NO_CONTENT).json(post);
    }
    catch (e) {
        next(e);
    }
};
exports.deleteById = deleteById;
//# sourceMappingURL=reviews.contoller.js.map