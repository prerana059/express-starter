/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextFunction,Request,Response } from "express"
import *as restroService from '../services/restro.service'
import { any, number, string } from "zod"
import { Prisma } from "@prisma/client"
import Boom  from "@hapi/boom"
import HttpStatus from 'http-status-codes'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getAll =async ( req: Request, res: Response, next: NextFunction ) =>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    try {
        const data = await restroService.getAll()
        res.json(data)
    } catch (err) {
        next(err)
    }
}

export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await restroService.create(req.body)
        res.json(data)
    } catch (err) {
        next(err)
    }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const loggedInUserId = (req as any).user.userId;

        const post = await restroService.update(Number(id), req.body)

        res.status(HttpStatus.CREATED).json(post)
    } catch (e) {
        next(e)
    }
}

export const remove =async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const { id } = req.params
        // @TODO: Handle errors
        const post = await restroService.remove(Number(id))
        res.status(HttpStatus.NO_CONTENT).json(post)

    } catch (e) {
        next(e)
    }
}

export const findRestroById =async ( req: Request, res: Response, next: NextFunction ) =>{
    try {
        const data = await restroService.findRestroById(Number(req.params.id))
        res.json(data)
    } catch (err) {
        next(err)
    }
}


