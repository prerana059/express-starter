"use strict";
//* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = __importDefault(require("./user.routes"));
const restro_route_1 = __importDefault(require("./restro.route"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use('/users', user_routes_1.default);
router.use('/restros', restro_route_1.default);
exports.default = router;
//# sourceMappingURL=main.js.map