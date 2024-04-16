import { z } from 'zod';
import { createReviewDtoBody } from '../validators/create-review.validator';
export declare const createResturant: (body: z.infer<typeof createReviewDtoBody>, loggedInUserId: number, resturantId: number) => Promise<any>;
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
export declare const findresturantById: (id: Number) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
export declare const updateResturantById: (id: number, restaurant: any) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
export declare const deleteById: (id: Number) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
//# sourceMappingURL=reviews.service.d.ts.map