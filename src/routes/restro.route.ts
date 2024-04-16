import express from 'express'
import{ getAll } from '../controllers/restro.controller'
import * as restroController from '../controllers/restro.controller'
import { validate } from '../utils/validate'
import { createRestroDto } from '../validators/create-restro.validator'
import { update } from '../services/restro.service'
import { authenticateToken, isAdmin } from '../middlewares/authentication.middleware'


const route = express.Router()


route.get('/', authenticateToken, restroController.getAll)

route.post('/', validate(createRestroDto), authenticateToken, restroController.create)

route.patch('/:id',  authenticateToken, restroController.update)

route.delete('/:id',  authenticateToken, isAdmin, restroController.remove)

route.get('/:id', authenticateToken, isAdmin, restroController.findRestroById)



export default route;