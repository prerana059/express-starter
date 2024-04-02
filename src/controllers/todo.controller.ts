/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextFunction,Request,Response } from "express"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getTodos = ( req: Request, res: Response, next: NextFunction ) =>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const todos = TodoController.getTodos()
    res.send(todos)

 
}