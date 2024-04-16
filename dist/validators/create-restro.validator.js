"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestroDto = exports.createRestroDtoBody = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const zod_1 = require("zod");
exports.createRestroDtoBody = zod_1.z.object({
    address: zod_1.z.string({
        required_error: 'address is required',
    }),
    description: zod_1.z.string({
        required_error: 'description is required',
    }),
    name: zod_1.z.string({
        required_error: 'name is required',
    })
}).strict();
exports.createRestroDto = zod_1.z.object({
    body: exports.createRestroDtoBody
});
//# sourceMappingURL=create-restro.validator.js.map