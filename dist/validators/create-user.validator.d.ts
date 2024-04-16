import { z } from 'zod';
export declare const createUserDtoBody: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    isAdmin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    isAdmin: boolean;
}, {
    email: string;
    password: string;
    name: string;
    isAdmin?: boolean | undefined;
}>;
export declare const createUserDto: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        password: z.ZodString;
        isAdmin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        email: string;
        password: string;
        name: string;
        isAdmin: boolean;
    }, {
        email: string;
        password: string;
        name: string;
        isAdmin?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        email: string;
        password: string;
        name: string;
        isAdmin: boolean;
    };
}, {
    body: {
        email: string;
        password: string;
        name: string;
        isAdmin?: boolean | undefined;
    };
}>;
//# sourceMappingURL=create-user.validator.d.ts.map