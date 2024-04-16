import { z } from 'zod';
export declare const createReviewDtoBody: z.ZodObject<{
    comment: z.ZodString;
    rating: z.ZodEnum<["1", "2", "3", "4", "5"]>;
}, "strip", z.ZodTypeAny, {
    comment: string;
    rating: "1" | "2" | "3" | "4" | "5";
}, {
    comment: string;
    rating: "1" | "2" | "3" | "4" | "5";
}>;
export declare const createReviewDto: z.ZodObject<{
    body: z.ZodObject<{
        comment: z.ZodString;
        rating: z.ZodEnum<["1", "2", "3", "4", "5"]>;
    }, "strip", z.ZodTypeAny, {
        comment: string;
        rating: "1" | "2" | "3" | "4" | "5";
    }, {
        comment: string;
        rating: "1" | "2" | "3" | "4" | "5";
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        comment: string;
        rating: "1" | "2" | "3" | "4" | "5";
    };
}, {
    body: {
        comment: string;
        rating: "1" | "2" | "3" | "4" | "5";
    };
}>;
//# sourceMappingURL=create-review.validator.d.ts.map