
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { z } from 'zod'

export const createRestroDtoBody = z.object({
    address: z.string({
        required_error: 'address is required',
    }),
    description: z.string({
        required_error: 'description is required',
    }),
    name: z.string({
        required_error: 'name is required',
    })
}).strict()

export const createRestroDto = z.object({
    body: createRestroDtoBody
});
