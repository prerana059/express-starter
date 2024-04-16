import { z } from "zod";
import { createRestroDtoBody } from "../validators/create-restro.validator";
export declare const create: (body: z.infer<typeof createRestroDtoBody>) => Promise<any>;
export declare const getAll: () => Promise<({
    reviews: {
        id: number;
        rating: number;
        comment: string;
        date: Date;
        userId: number;
        resturantId: number;
    }[];
    contacts: {
        id: number;
        number: string;
        resturantId: number;
    }[];
} & {
    id: number;
    name: string;
    description: string;
    address: string;
})[]>;
export declare const update: (id: number, restaurant: any) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
export declare const remove: (id: Number) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
export declare const findRestroById: (id: Number) => Promise<void>;
//# sourceMappingURL=restro.service.d.ts.map