"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRestroById = exports.remove = exports.update = exports.getAll = exports.create = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const boom_1 = __importDefault(require("@hapi/boom"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const create = async (body) => {
    const { name, description, address } = body;
    let createdRestro;
    // ts-ignore
    await prisma.$transaction(async (tx) => {
        createdRestro = await tx.resturant.create({
            data: {
                address,
                description,
                name,
            },
        });
        // API design pattern issues
        // await Promise.all(contactNumbers.map(contact => {
        //   return tx.contact.create({
        //     data: {
        //       restaurantId: createdRestro.id,
        //       number: contact
        //     }
        //   })
        // }))
    });
    return createdRestro;
};
exports.create = create;
const getAll = async () => {
    return prisma.resturant.findMany({
        include: {
            contacts: true,
            reviews: true,
        }
    });
};
exports.getAll = getAll;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const update = async (id, restaurant) => {
    const { address, description, name } = restaurant;
    try {
        return await prisma.resturant.update({
            where: { id: Number(id) },
            data: {
                address,
                description,
                name,
            },
        });
    }
    catch (err) {
        if (err.code === 'P2025') {
            throw boom_1.default.notFound('restaurant not found');
        }
        else {
            throw err;
        }
    }
};
exports.update = update;
const remove = async (id) => {
    try {
        return await prisma.resturant.delete({
            where: {
                id: Number(id),
            },
        });
    }
    catch (err) {
        if (err.code === 'P2025') {
            throw boom_1.default.notFound('restaurant not found');
        }
        else {
            throw err;
        }
    }
};
exports.remove = remove;
const findRestroById = async (id) => {
    try {
        await prisma.resturant.findFirstOrThrow({
            where: { id: Number(id) }
        });
    }
    catch (err) {
        console.log(err);
        if (err.code === 'P2025') {
            throw boom_1.default.notFound('Post not found');
        }
        else {
            throw err;
        }
    }
};
exports.findRestroById = findRestroById;
//# sourceMappingURL=restro.service.js.map