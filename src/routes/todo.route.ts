import express from 'express'
//import{ getAll } from '../controllers/todos
import * as TodoController from '../controllers/todo.controller'

const route = express.Router()

route.get('/', TodoController.getTodos)

export default route;