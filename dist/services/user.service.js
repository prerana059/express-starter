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
exports.refresh = exports.login = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const prisma_1 = __importDefault(require("../libs/prisma"));
const jwt = __importStar(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// user: any
async function login(body) {
    const { email, password } = body;
    const user = await prisma_1.default.user.findFirstOrThrow({ where: { email } });
    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch) {
        // Password does not match
        // If you want to throw a http error, you can. This is throw internal server error
        throw Error('Password not correct');
    }
    // Generate a token
    const accessToken = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: '1d',
    });
    const refreshToken = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, process.env.REFRESH_TOKEN_KEY, {
        expiresIn: '7d',
    });
    // Return the accessToken to the client
    return { success: true, accessToken, refreshToken };
}
exports.login = login;
async function refresh(userId) {
    const user = await prisma_1.default.user.findFirstOrThrow({ where: { id: userId } });
    // Generate a token
    const accessToken = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: '5h',
    });
    // Return the accessToken to the client
    return { success: true, accessToken };
}
exports.refresh = refresh;
// Refresh token - long lived token
// Access token - short lived token expires in 5 minutes
//# sourceMappingURL=user.service.js.map