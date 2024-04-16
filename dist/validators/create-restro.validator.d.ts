import { z } from 'zod';
export declare const createRestroDtoBody: z.ZodObject<{
    address: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    address: string;
    description: string;
}, {
    name: string;
    address: string;
    description: string;
}>;
export declare const createRestroDto: z.ZodObject<{
    body: z.ZodObject<{
        address: z.ZodString;
        description: z.ZodString;
        name: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        address: string;
        description: string;
    }, {
        name: string;
        address: string;
        description: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        address: string;
        description: string;
    };
}, {
    body: {
        name: string;
        address: string;
        description: string;
    };
}>;
//# sourceMappingURL=create-restro.validator.d.ts.map