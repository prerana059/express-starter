"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateResturantById = exports.findresturantById = exports.getAll = exports.createResturant = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const prisma_1 = __importDefault(require("../libs/prisma"));
const createResturant = async (body, loggedInUserId, resturantId) => {
    const { comment, rating } = body;
    let createdRestro;
    // ts-ignore
    await prisma_1.default.$transaction(async (tx) => {
        createdRestro = await tx.review.create({
            data: {
                comment,
                date: new Date(),
                resturantId,
                userId: loggedInUserId,
                rating: Number(rating)
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
exports.createResturant = createResturant;
const getAll = async () => {
    return await prisma_1.default.resturant.findMany({
        include: {
            contacts: true,
            reviews: true,
        }
    });
};
exports.getAll = getAll;
const findresturantById = async (id) => {
    try {
        return await prisma_1.default.resturant.findUniqueOrThrow({
            where: { id: Number(id) },
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
exports.findresturantById = findresturantById;
const updateResturantById = async (id, restaurant) => {
    const { address, description, name } = restaurant;
    try {
        return await prisma_1.default.resturant.update({
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
exports.updateResturantById = updateResturantById;
const deleteById = async (id) => {
    try {
        return await prisma_1.default.resturant.delete({
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
exports.deleteById = deleteById;
//# sourceMappingURL=reviews.service.js.map