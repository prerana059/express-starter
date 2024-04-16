"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReviewDto = exports.createReviewDtoBody = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const zod_1 = require("zod");
exports.createReviewDtoBody = zod_1.z.object({
    comment: zod_1.z
        .string({
        required_error: 'comment is required',
    }),
    rating: zod_1.z.enum(['1', '2', '3', '4', '5']),
});
exports.createReviewDto = zod_1.z.object({
    body: exports.createReviewDtoBody
});
// isAdmin: z.boolean().optional().default(false)
// 
//# sourceMappingURL=create-review.validator.js.map