
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import Boom from '@hapi/boom'
import prisma from '../libs/prisma'
import { z } from 'zod'
import { createReviewDtoBody } from '../validators/create-review.validator'

export const createResturant = async (body: z.infer<typeof createReviewDtoBody>, loggedInUserId: number, resturantId: number) => {
  const { comment, rating } = body


  let createdRestro: any;
  // ts-ignore
  await prisma.$transaction(async (tx) => {
    createdRestro = await tx.review.create({
      data: {
        comment,
        date: new Date(),
        resturantId,
        userId: loggedInUserId,
        rating: Number(rating)
      },
    })
    // API design pattern issues
    // await Promise.all(contactNumbers.map(contact => {
    //   return tx.contact.create({
    //     data: {
    //       restaurantId: createdRestro.id,
    //       number: contact
    //     }
    //   })
    // }))

  })
  return createdRestro;


}

export const getAll = async () => {
  return await prisma.resturant.findMany({
    include: {
      contacts: true,
      reviews: true,
    }
  })
}

export const findresturantById = async (id: Number) => {
  try {
    return await prisma.resturant.findUniqueOrThrow({
      where: { id: Number(id) },
    })
  } catch (err: any) {
    if (err.code === 'P2025') {
      throw Boom.notFound('restaurant not found')
    } else {
      throw err
    }
  }
}

export const updateResturantById = async (id: number, restaurant: any) => {
  const { address, description, name } = restaurant
  try {
    return await prisma.resturant.update({
      where: { id: Number(id) },
      data: {
        address,
        description,
        name,
      },
    })
  } catch (err: any) {
    if (err.code === 'P2025') {
      throw Boom.notFound('restaurant not found')
    } else {
      throw err
    }
  }
}

export const deleteById = async (id: Number) => {
  try {
    return await prisma.resturant.delete({
      where: {
        id: Number(id),
      },
    })
  } catch (err: any) {
    if (err.code === 'P2025') {
      throw Boom.notFound('restaurant not found')
    } else {
      throw err
    }
  }
}
