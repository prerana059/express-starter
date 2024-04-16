/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import  Boom  from "@hapi/boom" 
import { PrismaClient} from "@prisma/client"
import { number, string, z } from "zod"
import { createRestroDtoBody } from "../validators/create-restro.validator"


const prisma = new PrismaClient()

export const create = async (body: z.infer<typeof createRestroDtoBody>) => {
  const { name, description, address} = body
  let createdRestro: any;
  // ts-ignore
  await prisma.$transaction(async (tx) => {
    createdRestro = await tx.resturant.create({
      data: {
        address,
        description,
        name,
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


export const getAll = async ( ) =>{
    return prisma.resturant.findMany({
        include: {
            contacts: true,
            reviews: true,
        }
    })
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any

  


  export const update = async (id: number, restaurant: any) => {
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


export const remove = async (id: Number) => {
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

export const findRestroById = async ( id: Number) => {
    try{
    await prisma.resturant.findFirstOrThrow({
        where: { id: Number(id)}
    })
}catch (err: any) {
    console.log(err)
    if (err.code === 'P2025'){
        throw Boom.notFound('Post not found')
        
    } else {
        throw err
    }
}
}





