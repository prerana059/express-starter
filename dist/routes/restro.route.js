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
const express_1 = __importDefault(require("express"));
const restroController = __importStar(require("../controllers/restro.controller"));
const validate_1 = require("../utils/validate");
const create_restro_validator_1 = require("../validators/create-restro.validator");
const authentication_middleware_1 = require("../middlewares/authentication.middleware");
const route = express_1.default.Router();
route.get('/', authentication_middleware_1.authenticateToken, restroController.getAll);
route.post('/', (0, validate_1.validate)(create_restro_validator_1.createRestroDto), authentication_middleware_1.authenticateToken, restroController.create);
route.patch('/:id', authentication_middleware_1.authenticateToken, restroController.update);
route.delete('/:id', authentication_middleware_1.authenticateToken, authentication_middleware_1.isAdmin, restroController.remove);
route.get('/:id', authentication_middleware_1.authenticateToken, authentication_middleware_1.isAdmin, restroController.findRestroById);
exports.default = route;
//# sourceMappingURL=restro.route.js.map